import { useEffect, useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const loadedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        setRecipes(loadedRecipes);
    }, []);

    return (
        <div>
            <h1>Your Recipes</h1>
            {recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                    <div key={index}>
                        <h2>
                            <Link href={`/add-recipe?edit=true&index=${index}`} legacyBehavior>
                                <a>{recipe.title}</a>
                            </Link>
                        </h2>
                        <h4>Ingredients:</h4>
                        <p>{recipe.ingredients}</p>
                        <h4>Instructions:</h4>
                        <p>{recipe.instructions}</p>
                        <h4>Comments:</h4>
                        {recipe.comments && recipe.comments.map((cmt, idx) => (
                            <p key={idx}>{cmt}</p>
                        ))}
                        <Link href={`/recipes/${index}`} legacyBehavior>
                            <button>Comment</button>
                        </Link>
                    </div>
                ))
            ) : (
                <p>No recipes found. Add your first recipe!</p>
            )}
            <Link href="/add-recipe" legacyBehavior><a>Add a New Recipe</a></Link>
        </div>
    );
}
