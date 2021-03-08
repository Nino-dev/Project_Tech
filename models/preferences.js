const mongoose = require('mongoose');
const db = require('../connection');

const PreferenceSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    brands: {
      type: Array,
      required: true
    }
});

const preferences = mongoose.model('preferences', PreferenceSchema);

module.exports = preferences;
