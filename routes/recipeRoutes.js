const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.post('/add-recipe', recipeController.addRecipe);
router.get('/get-recipe', recipeController.getRecipeByIngredients);

module.exports = router;
