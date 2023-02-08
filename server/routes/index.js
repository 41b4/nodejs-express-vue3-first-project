var express = require('express');
var router = express.Router();
const pool = require("../db/dbConnection");

/* GET home page. */
router.get('/', async function(req, res, next) {
  const [rows]= await pool.query('SELECT * FROM books')
  res.json({ rows });
});

// DELETE home page
router.get('/delete/:id',async (req,res,next)=>{
  console.log(req.params.id)
  await pool.query('DELETE FROM books WHERE id=?',[req.params.id])
  res.redirect('/')
})
module.exports = router;
