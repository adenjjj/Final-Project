import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function CommentsPage() {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState(null);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        // Fetch recipe details and comments from an API or centralized store
        // This example uses localStorage, but you could use a database or external API
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        if (recipes[id]) {
            setRecipe(recipes[id]);
            setComments(recipes[id].comments || []);
        }
    }, [id]);

    const handleAddComment = (event) => {
        event.preventDefault();
        const newComments = [...comments, comment];
        const updatedRecipe = { ...recipe, comments: newComments };
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes[id] = updatedRecipe;
        localStorage.setItem('recipes', JSON.stringify(recipes));
        setComments(newComments);
        setComment('');
    };

    return (
        <div>
            <h1>Comments for {recipe?.title}</h1>
            {recipe && (
                <>
                    <h2>{recipe.title}</h2>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                    <form onSubmit={handleAddComment}>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment"
                            required
                        />
                        <button type="submit">Add Comment</button>
                    </form>
                    <div>
                        <h3>Comments:</h3>
                        {comments.map((cmt, idx) => (
                            <p key={idx}>{cmt}</p>
                        ))}
                    </div>
                    <Link href="/recipes" legacyBehavior><a>Back to Homepage</a></Link>
                </>
            )}
        </div>
    );
}
