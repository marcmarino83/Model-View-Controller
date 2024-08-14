// controllers/someRoute.js
const router = require('express').Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('This is the someRoute endpoint');
});

module.exports = router;
