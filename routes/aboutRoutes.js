const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// Route handler for the About page
router.get('/', aboutController.aboutPageHandler);

module.exports = router;