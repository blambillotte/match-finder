// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const htmlRoutes = require('./app/routing/html_routes');
const jsonRoutes = require('./app/routing/json_routes');


// Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', htmlRoutes);
app.use('/api', jsonRoutes);
app.use(express.static( __dirname + '/app/public/static' ));


const parser = bodyParser.urlencoded({ extended: false });


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
