const express = require('express');
const router = express.Router();
const { index } = require('../controllers/blog');

router.get('/', index);

module.exports = router;