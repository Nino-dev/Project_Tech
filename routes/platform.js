const express = require('express');
const router = express.Router();

router.get('/platform', (req, res, next) => {
  const name = req.query.name;
  res.render('platform', {name: name});
});

module.exports = router;
