const path = require('path');

const express = require('express');

const rootDir = require('../util/path.js');

const router = express.Router();

router.get('/', (res, req, next) => {
  res.sendfile(path.join(rootDir, 'views', 'teach.html'));
});

module.exports = router;