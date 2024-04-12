import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function recipes() {
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
                        <h2>{recipe.title}</h2>
                        <h4>Ingredients:</h4>
                        <p>{recipe.ingredients}</p>
                        <h4>Instructions:</h4>
                        <p>{recipe.instructions}</p>
                    </div>
                ))
            ) : (
                <p>No recipes found. Add your first recipe!</p>
            )}
            <Link href="/add-recipe" legacyBehavior><a>Add a New Recipe</a></Link>
        </div>
    );
}
