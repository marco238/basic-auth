const express = require('express');
const router = express.Router();
const authRouter = require('./auth.routes');
const userRouter = require('./user.routes');

// Home page
router.get('/', (req, res) => res.render('index', { title: 'App created with Ironhack generator 🚀' }));

// Auth routes
router.use('/', authRouter);

// User routes
router.use('/user', userRouter);

module.exports = router;
