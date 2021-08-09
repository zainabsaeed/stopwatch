var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

//services
var datascienceRouter = require('./routes/services/data-science');

//case studies
var casestudy1Router = require('./routes/casestudies/casestudy-1');

//demos
var demosRouter = require('./routes/demos/demos');

//innovation & labs
var inoovationlabsRouter = require('./routes/innovations-labs/innovations-labs');

//clients
var clientsRouter  = require('./routes/clients/clients');

//team
var teamRouter = require('./routes/team/team');

//blog
var blogRouter = require('./routes/blog');
var blogsampleRouter = require('./routes/blogs/blog-sample');

//contact
var contactRouter  =require('./routes/contact/contact');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

//services
app.use('/data-science',datascienceRouter);

//case studies
app.use('/casestudy-1',casestudy1Router);

//demos
app.use('/demos',demosRouter);

//innovations & labs
app.use('/innovations-labs',inoovationlabsRouter);

//clients
app.use('/clients',clientsRouter);

//team
app.use('/team',teamRouter);

//blog
app.use('/blog', blogRouter);
app.use('/blogs/blog-sample',blogsampleRouter);

//contact
app.use('/contact',contactRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
