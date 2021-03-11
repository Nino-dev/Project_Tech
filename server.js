const express = require('express');
const path = require('path');
const slug = require('slug');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json
const PORT = process.env.PORT || 3000;

// Routes
const indexRouter = require('./routes/index');
const successRouter = require('./routes/success');

// Models
const preferences = require('./models/preferences');

//DB Connection
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./connection');
connectDB();

const app = express();

app.set('views', path.join(__dirname, 'views/pages/'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/public", express.static(path.join(__dirname, '/public')));

app.get('/', indexRouter);

//POST form data to DB
app.post('/add', async (req, res) => {
  try {
    const username = req.body.username
    const brands = req.body.brands
    const preference = new preferences({
      username: username,
      brands: brands
    });
    await preference.save()
    .then(() => {res.redirect('success');
  });
    } catch(err) {
        console.log(err);
        res.status(500).send();
    }
  });

// Update Array
app.post('/update', async (req, res) => {
  try {
    const brands = req.body.brands
    let preference = await preferences.findOne({
          username: "nino"
        });
        await preferences.updateOne({}, {
          brands: brands
        });
    await preference.save()
    .then(() => {res.redirect('success');
  });
    } catch(err) {
        console.log(err);
        res.status(500).send();
    }
  });
  // await onnodig

//Delete preferences
app.post('/delete', async (req, res) => {
    try {
      const username = req.body.username
      await preferences.findOneAndDelete({
        username: username
      }).exec();
      res.redirect('/');
    } catch (error) {
      res.status(500).send();
    }
  });

//Find data from DB and render to template
app.get('/success', async (req, res) => {
  const dataPreferences = await preferences.findOne();
  res.render('success', {data: dataPreferences});
});

app.listen(PORT);
