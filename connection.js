require('dotenv').config();

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

const connectDB = async() => {
  await mongoose.connect(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('Database was succesfully connected');
}

module.exports = connectDB;
