import { useState } from 'react';
import Router from 'next/router';

export default function AddRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecipe = { title, ingredients, instructions };
        addRecipe(newRecipe);
        Router.push('/recipes');  // Redirect to homepage after adding the recipe
    };

    function addRecipe(recipe) {
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
            />
            <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
                required
            />
            <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Instructions"
                required
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
}
