const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const rockRoutes = require('./routes/rockstar.js');
const teachRoutes = require('./routes/teacher.js');
const notFoundRoute = require('./routes/404.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', rockRoutes);
app.use('/', teachRoutes);
//app.use(notFoundRoute);

app.listen(5000);