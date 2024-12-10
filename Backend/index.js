const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('API is running...');
});

// User routes
app.use('/api/users', userRoutes);

// Global error handling (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Server Error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
