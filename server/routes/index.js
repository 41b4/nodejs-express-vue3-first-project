var express = require('express');
var router = express.Router();
const pool = require("../db/dbConnection");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [rows]= await pool.query('SELECT * FROM books')
  res.json({ rows });
});

module.exports = router;
