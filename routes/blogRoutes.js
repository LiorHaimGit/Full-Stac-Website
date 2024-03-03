const express = require('express');
const router = express.Router();
const { blogPageHandler } = require('../controllers/blogController');

// Route handler for the About page
router.get('/', blogController.blogPageHandler);

module.exports = router;
