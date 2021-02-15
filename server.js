const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const platformRouter = require('./routes/platform');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use("/public", express.static(path.join(__dirname, '/public')));

app.get('/', indexRouter);
app.get('/platform', platformRouter);

app.listen(3000);
