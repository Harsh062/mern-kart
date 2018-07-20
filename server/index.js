var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var dbConf = require('./config/db');

var keys = require('./config/keys');
var PORT = process.env.PORT || 5000;
var app = express();

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

mongoose.Promise = global.Promise;
mongoose.connect(dbConf.dbURL);

require('./config/passport')(passport);
require('./routes/auth')(app, passport);

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`);
});
