// Dependencies
// =============================================================
const express = require('express');
const path = require('path');


module.exports = (function() {
    'use strict';
    const router = express.Router();


    router.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    router.get('/surveys/new', function(req, res) {
      res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    router.get('/style.css', function(req, res) {
      res.sendFile(__dirname, '../public/static/style.css');
    });
    // 
    // router.post('/surveys', function(req, res) {
    //   console.log(req.body);
    //   // req.send('Form Submitted');
    // });

    return router;
})();