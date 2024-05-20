const express = require('express');
const { createPoll } = require('../Controllers/pollController');
const verifyToken = require('../Middlewares/auth');

const router = express.Router();

router.post('/create', verifyToken, createPoll);

module.exports = router;
