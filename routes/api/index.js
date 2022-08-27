const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// adding prefix users and thoughts to the routes created in their respective files
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
