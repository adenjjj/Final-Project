import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function DeleteRecipe() {
    const router = useRouter();
    const { id } = router.query;
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        if (recipes[id]) {
            setRecipe(recipes[id]);
        }
    }, [id]);

    const handleDelete = () => {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.splice(id, 1); 
        localStorage.setItem('recipes', JSON.stringify(recipes));
        router.push('/recipes'); 
    };

    return (
        <div className="container mt-4">
            {recipe ? (
                <>
                    <h1>{recipe.title}</h1>
                    <h4>Ingredients:</h4>
                    <p>{recipe.ingredients}</p>
                    <h4>Instructions:</h4>
                    <p>{recipe.instructions}</p>
                    <div className="mt-3">
                        <button className="btn btn-danger" onClick={handleDelete}>Delete Recipe</button>
                        <button className="btn btn-secondary ms-2" onClick={() => router.push('/recipes')}>Back to Home</button>
                    </div>
                </>
            ) : (
                <p>Loading recipe details...</p>
            )}
        </div>
    );
}
