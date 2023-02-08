var express = require('express');
var router = express.Router();
const pool = require("../db/dbConnection");

router.get('/', function(req, res, next) {

  res.json('get');
});

/* POST new book */

router.post('/', async function(req, res, next) {
  console.log(req.body)
  const form = await pool.query('INSERT INTO books VALUES (null, ?, ?, ?, ?)',[req.body.title,req.body.description,req.body.img,req.body.author])
  res.status(200).json({msg:'ok'})
});

module.exports = router;
