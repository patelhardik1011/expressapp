var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
var hbs = exphbs.create(require('./helpers/handlebar.js'));
// view engine setup
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    cookie: {maxAge: 60000},
    saveUninitialized: true,
    resave: 'true',
    secret: 'DGST%$#$SGgs657'
}));
app.use(flash());

require("./routing/router")(app);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
