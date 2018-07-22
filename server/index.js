var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var flash    = require('connect-flash');
var bodyParser = require('body-parser');

var dbConf = require('./config/db');
var keys = require('./config/keys');
var PORT = process.env.PORT || 5000;
var app = express();

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect(dbConf.dbURL);

require('./config/passport')(passport);
require('./routes/auth')(app, passport);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
