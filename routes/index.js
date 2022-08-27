const router = require('express').Router();

// importing Api routes
const apiRoutes = require('./api');

// adding the /api prefix to all imported routes
router.use('/api', apiRoutes);

// error response
router.use((req, res) => {
  res.status(404).send('<h1>404 Error!<h1>');
});

// exporting router
module.exports = router;
