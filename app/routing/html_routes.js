// Dependencies
// =============================================================
const express = require('express');
const path = require('path');
const puppies = require('../data/data');

console.log(puppies);


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

    router.get('/surveys/result/:id', function(req, res) {
      const id = req.params.id;
      //res.send(JSON.stringify(puppies[id]));
      res.render("index", puppies[id] );
    });

    router.post('/surveys', function(req, res) {
      console.log(req.body);
      console.log(puppies);

      const matchIndex = comparePuppies(puppies, req.body);
      const closestMatch = puppies[matchIndex];
      console.log(`Closest Match is: ${JSON.stringify(closestMatch)}`);
      puppies.push(req.body);

      //res.end(JSON.stringify(res.body));
      res.redirect('/surveys/result/' + matchIndex);
    });

    return router;
})();




function findLeastDiffIndex(valCompare) {

  valCompare.sort(function(a, b) {
    return a.totalDiff - b.totalDiff;
  });

  console.log(`Closest Match Index: ${valCompare[0].index}`);
  return valCompare[0].index;
}


function CompareConstructor(index, diff) {
  this.index = index;
  this.totalDiff = diff;
}

function comparePuppies(puppyArr, newPup) {
  let valCompare = [];

  for (var i = 0; i < puppyArr.length; i++) {
    let fluffDiff = Math.abs(parseInt(puppyArr[i].fluffy) - parseInt(newPup.fluffy));
    let energyDiff = Math.abs(parseInt(puppyArr[i].energy) - parseInt(newPup.energy));
    let totalDiff = fluffDiff + energyDiff;
    valCompare.push(new CompareConstructor(i, totalDiff));
  }

  console.log(valCompare);
  return findLeastDiffIndex(valCompare);
}

const test = {
    fname: 'Test',
    puppypic: 'ws;dlfkjsd;fs',
    fluffy: '3',
    energy: '5' }
