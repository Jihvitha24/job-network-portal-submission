const express = require('express');
// Controller functions can be created similarly to profileController
const { postJob, getJobs } = require('../controllers/jobController');

const router = express.Router();

router.get('/', getJobs);
router.post('/post', postJob);

module.exports = router;
