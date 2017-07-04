require('babel-register')({
  presets: ['react', 'es2015']
});
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3001;
var mongoose = require('mongoose');

// Connect to Mongodb //
mongoose.connect('localhost:27017/shopping');

// Set view engine //
app.set('view engine', 'html')
app.engine('html', function (path, options, callbacks){
  fs.readFile(path, 'utf-8', callback)
});

// Middleware //
app.use(express.static(path.join(__dirname, '../client')))

// Send paths back to index to be handled by react-router //
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(__dirname, '../client', 'index.html'))
// })


app.listen(PORT, function() {
	console.log('http://localhost:' + PORT)
})

// Serve app //
module.exports = app;