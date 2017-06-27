var express = require('express')
var app = express()
var PORT = process.env.PORT || 3001

// Middleware //
app.use(express.static(path.join(__dirname, '../client')))


app.listen(PORT, function() {
	console.log('http://localhost:' + PORT)
})