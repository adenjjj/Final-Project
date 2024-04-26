import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Router from 'next/router';

export default function RecipeDetail() {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState(null);
    const [comment, setComment] = useState('');

    useEffect(() => {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        if (recipes[id]) {
            setRecipe(recipes[id]);
        }
    }, [id]);

    const handleComment = (event) => {
        event.preventDefault();
        const updatedRecipe = { 
            ...recipe, 
            comments: recipe.comments ? [...recipe.comments, comment] : [comment]  // Append new comment to array
        };
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes[id] = updatedRecipe;
        localStorage.setItem('recipes', JSON.stringify(recipes));
        Router.push('/recipes');
    };

    return (
        <div>
            {recipe ? (
                <>
                    <h1>{recipe.title}</h1>
                    <h4>Ingredients:</h4>
                    <p>{recipe.ingredients}</p>
                    <h4>Instructions:</h4>
                    <p>{recipe.instructions}</p>
                    <form onSubmit={handleComment}>
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment"
                            required
                        />
                        <button type="submit">Post Comment</button>
                    </form>
                    {recipe.comments && recipe.comments.map((cmt, index) => (
                        <p key={index}>{cmt}</p>
                    ))}
                </>
            ) : (
                <p>Recipe not found.</p>
            )}
        </div>
    );
}
