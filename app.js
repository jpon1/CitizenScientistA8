
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var signin = require('./routes/signin');
var signup = require('./routes/signup');
var forgotpassword = require('./routes/forgotpassword');
var home = require('./routes/home');
var create = require('./routes/create');
var contribute = require('./routes/contribute');
var contribute2 = require('./routes/contribute2');
var analyze = require('./routes/analyze');
var myprojects = require('./routes/myprojects');
var timeData = require('./routes/timeData');
var contribute3 = require('./routes/contribute3');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);

app.get('/index', index.view);
app.get('/signin', signin.view);
app.get('/signup', signup.view);
app.get('/forgotpassword', forgotpassword.view);
app.get('/home', home.view);
app.get('/create', create.view);
app.get('/contribute', contribute.view);
app.get('/contribute2', contribute2.view);
app.get('/analyze', analyze.view);
app.get('/myprojects', myprojects.view);
app.get('/timeData', timeData.view);
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
