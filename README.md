# smart_recipe_app
A smart recipe app, powered by Express and PostgreSQL, allows users to input ingredients and generates recipes accordingly. Leveraging a robust backend, it efficiently queries a PostgreSQL database to retrieve matching recipes, offering a seamless and personalized culinary experience for users seeking inspiration in their kitchen endeavors.



# Smart Recipe App

The Smart Recipe App is a web application that allows users to add recipes and retrieve recipes based on provided ingredients. It is built using Node.js, Express, and PostgreSQL.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/smart-recipe-app.git
    cd smart-recipe-app
    ```

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Set up PostgreSQL:
    - Ensure you have PostgreSQL installed and running.
    - Create a new database:
        ```sql
        CREATE DATABASE smart_recipe_db;
        ```
    - Create the `recipes` table:
        ```sql
        \c smart_recipe_db;

        CREATE TABLE recipes (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            ingredients TEXT[] NOT NULL,
            instructions TEXT NOT NULL
        );
        ```

4. Configure the database connection:
    - Update the `db/dbConfig.js` file with your PostgreSQL credentials.

## Usage

1. Start the server:
    ```bash
    node server.js
    ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

### Add a Recipe

- **URL:** `/api/add-recipe`
- **Method:** `POST`
- **Body:**
    ```json
    {
        "name": "Recipe Name",
        "ingredients": ["ingredient1", "ingredient2"],
        "instructions": "Recipe instructions."
    }
    ```
- **Success Response:**
    - **Code:** 201
    - **Content:**
        ```json
        {
            "id": 1,
            "name": "Recipe Name",
            "ingredients": ["ingredient1", "ingredient2"],
            "instructions": "Recipe instructions."
        }
        ```

### Get Recipes by Ingredients

- **URL:** `/api/get-recipe`
- **Method:** `GET`
- **Query Parameters:**
    - `ingredients` - A comma-separated list of ingredients.
    - Example: `ingredients=ingredient1,ingredient2`
- **Success Response:**
    - **Code:** 200
    - **Content:**
        ```json
        [
            {
                "id": 1,
                "name": "Recipe Name",
                "ingredients": ["ingredient1", "ingredient2"],
                "instructions": "Recipe instructions."
            }
        ]
        ```
- **Error Response:**
    - **Code:** 404
    - **Content:** `No recipes found`

## Project Structure

