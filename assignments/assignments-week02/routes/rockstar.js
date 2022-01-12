const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('/user', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'rockstar.html'))
});

module.exports = router;