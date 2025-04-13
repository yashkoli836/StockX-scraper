import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { setRoutes } from './routes/index';
import getConnection from './db/database';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Connect to the database
// Initialize database connection
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite', // Replace with your database dialect (e.g., 'mysql', 'postgres')
    storage: './database.sqlite' // Replace with your database configuration
});
sequelize.authenticate()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.error('Unable to connect to the database:', err));

// Set up routes
setRoutes(app);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

