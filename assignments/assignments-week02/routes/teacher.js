const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendfile(path.join(rootDir, 'views', 'teacher.html'));
});

module.exports = router;