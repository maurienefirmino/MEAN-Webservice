'use strict';
const express = require('express');
const router = express.Router();
const fs = require('fs');
const index = fs.readFileSync('././public/index.html');

/* Inicio WebService. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  response.writeHead(200,{"contentType":"text/html"});
  response.end(index);

});

module.exports = router;
