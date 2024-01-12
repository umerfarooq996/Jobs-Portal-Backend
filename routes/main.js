const express = require('express');
const router = express.Router();
const jobsController = require('../controllers/jobs');

router.get('/getJobs', jobsController.getJobs);

module.exports = router;
