const pool = require('../db/dbConfig');

const addRecipe = async (name, ingredients, instructions) => {
    try {
        const result = await pool.query(
            'INSERT INTO recipes (name, ingredients, instructions) VALUES ($1, $2, $3) RETURNING *',
            [name, ingredients, instructions]
        );
        return result.rows[0];
    } catch (err) {
        throw new Error(err.message);
    }
};

const getRecipeByIngredients = async (ingredients) => {
    try {
        const result = await pool.query(
            'SELECT * FROM recipes WHERE ingredients @> $1::text[]',
            [ingredients]
        );
        return result.rows;
    } catch (err) {
        throw new Error(err.message);
    }
};

module.exports = {
    addRecipe,
    getRecipeByIngredients,
};
