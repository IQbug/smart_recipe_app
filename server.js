const express = require('express');

const bodyParser = require('body-parser');

const recipeRoutes = require('./routes/recipeRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/api', recipeRoutes);


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
