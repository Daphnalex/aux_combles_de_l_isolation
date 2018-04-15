//require('./db/db.js');
var express    = require('express')
  , path       = require('path')
  , bodyParser = require('body-parser')
//  , routes     = require("./routes");
var cors = require('cors');
var app = express();

// Define the port to run on
app.set('port',process.env.PORT || 3000);
app.use(cors());
// Add middleware to console log every request
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Set static directory before defining routes
app.use(express.static(path.join(__dirname, 'src')));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

// Enable parsing of posted forms
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

// Add some routing
//app.use('/api',routes);

// Listen for requests
var server = app.listen(app.get('port'),function(){
  console.log('Express server listening on port ' + server.address().port);
});
