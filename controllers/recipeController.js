const recipeService = require('../services/recipeService');

const addRecipe = async (req, res) => {
    const { name, ingredients, instructions } = req.body;
    try {
        const recipe = await recipeService.addRecipe(name, ingredients, instructions);
        res.status(201).json(recipe);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

const getRecipeByIngredients = async (req, res) => {
    const ingredients = req.query.ingredients.split(',');
    try {
        const recipes = await recipeService.getRecipeByIngredients(ingredients);
        if (recipes.length > 0) {
            res.json(recipes);
        } else {
            res.status(404).send('No recipes found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};


module.exports = {
    addRecipe,
    getRecipeByIngredients,
};
