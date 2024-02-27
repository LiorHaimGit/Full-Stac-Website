const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.post('/submit-resume', resumeController.submitResume);

module.exports = router;