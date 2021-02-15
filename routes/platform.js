const express = require('express');
const router = express.Router();

router.get('/platform', (req, res, next) => {
  const name = req.query.name;
  res.render('platform', { name });
});

module.exports = router;
