import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const loadedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        setRecipes(loadedRecipes);
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-3">Your Recipes</h1>
            {recipes.length > 0 ? (
                recipes.map((recipe, index) => (
                    <div key={index} className="card mb-3">
                        <div className="card-body">
                            <h2 className="card-title">
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
                                <button className="btn btn-primary">Comment</button>
                            </Link>
                            <Link href={`/delete-recipe/${index}`} legacyBehavior>
                                <button className="btn btn-danger">Delete Recipe</button>
                            </Link>
                        </div>
                    </div>
                ))
            ) : (
                <p>No recipes found. Add your first recipe!</p>
            )}
            <Link href="/add-recipe" legacyBehavior><a className="btn btn-success">Add a New Recipe</a></Link>
        </div>
    );
}
