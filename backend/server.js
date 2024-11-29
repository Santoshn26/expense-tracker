const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const sequelize = require('./models').sequelize;

const app = express();

app.use(bodyParser.json());

// Add a route for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the Expense Tracker API!');
});

app.use('/users', userRoutes);
app.use('/transactions', transactionRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => console.log('Server is running on port 3000'));
});

const cors = require('cors');
app.use(cors());
