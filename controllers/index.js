// controllers/index.js
const router = require('express').Router();
const someRoute = require('./someRoute');  // Ensure this path is correct

router.use('/some-route', someRoute);

module.exports = router;
