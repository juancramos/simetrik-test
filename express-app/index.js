// index.js

/**
 * Required External Modules
 */
const express = require('express');
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
const routes = require('./router/');

/**
 *  App Configuration
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));

/**
 * Routes Definitions
 */
app.use('/', routes);

/**
 * Server Activation
 */
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});