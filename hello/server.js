const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// CORS Configuration
const corsOptions = {
    origin: '*', // Change to a specific origin in production for security
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

let users = []; // Simulated database

// API to add a user
app.post('/api/users', (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const newUser = { id: users.length + 1, name, email, password };
    users.push(newUser);

    res.status(201).json({ message: 'User created', user: newUser });
});

// API to get all users
app.get('/api/users', (req, res) => {
    res.json(users);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
