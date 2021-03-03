const express = require('express');
const connectDB = require('./database')
const path = require('path');
const slug = require('slug');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const indexRouter = require('./routes/index');
const successRouter = require('./routes/success');

const app = express();
connectDB();

app.set('views', path.join(__dirname, 'views/pages/'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, '/public')));

app.get('/', indexRouter);
app.get('/success', successRouter);
app.post('/success', (req, res) => {
  const data = req.body;
  res.render('success', { data });
});

app.listen(3000);
