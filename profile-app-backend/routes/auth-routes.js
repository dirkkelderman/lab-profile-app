const express    = require('express');
const authRoutes = express.Router();

const User       = require('../models/user-model')

authRoutes.post('/login', (req, res, next) => {
    res.status(400).json({ message: 'Login works' });
})

authRoutes.post('/signup', (req, res, next) => {
    res.status(400).json({ message: 'Signup works' });
})

authRoutes.post('/upload', (req, res, next) => {
    res.status(400).json({ message: 'Route works' });
})

authRoutes.post('/edit', (req, res, next) => {
    res.status(400).json({ message: 'Route works' });
})

authRoutes.post('/logout', (req, res, next) => {
    res.status(400).json({ message: 'Route works' });
})

authRoutes.get('/loggedin', (req, res, next) => {
    res.status(400).json({ message: 'Route works' });
})


module.exports = authRoutes;
