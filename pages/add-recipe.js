import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function AddRecipe() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    useEffect(() => {
        if (router.query.edit && router.query.index) {
            const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
            const recipe = recipes[router.query.index];
            if (recipe) {
                setTitle(recipe.title);
                setIngredients(recipe.ingredients);
                setInstructions(recipe.instructions);
            }
        }
    }, [router.query]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newRecipe = { title, ingredients, instructions };
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        if (router.query.edit && router.query.index !== undefined) {
            recipes[router.query.index] = newRecipe; // Update the existing recipe
        } else {
            recipes.push(newRecipe); // Add a new recipe
        }
        localStorage.setItem('recipes', JSON.stringify(recipes));
        router.push('/recipes');  // Redirect to homepage after saving the recipe
    };

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
            <button type="submit">{router.query.edit ? 'Update Recipe' : 'Add Recipe'}</button>
        </form>
    );
}
