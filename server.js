// Dependencies
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./app/routing/html_routes');
const apiRoutest = require('./app/routing/api_routes');


// Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3200;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);
app.use('/api', apiRoutest);
app.use(express.static( __dirname + '/app/public/static' ));




// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log(`App listening on PORT ${PORT}`);
});
