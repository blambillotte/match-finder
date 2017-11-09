// Dependencies
// =============================================================
const express = require('express');



module.exports = (function() {
    'use strict';

    const api = express.Router();

    api.get("/matches", function(req, res) {
      res.json(test);
    });

    api.post("/surveys/new", function(req, res) {
      console.log(req);
      console.log('----');
      console.log(res);
    });
    console.log('this is working');

    return api;
})();




const test = [
  {
    "name":"Jack",
    "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXc5WYZov9FRH4UF2mI5Il0ZQlVwj5oOLelcU8Bw24Re-Kaa-",
    "scores":[ 5,1,4,4,5,1,2,5,4,1 ]
  }
];
