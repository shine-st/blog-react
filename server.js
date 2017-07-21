/**
 * Created by shinest on 24/02/2017.
 */
var express = require('express')
var path = require('path')

var app = express()


// serve our static stuff like index.css
// path.resolve will always result in an absolute URL
app.use(express.static(path.resolve('public')))

// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
    res.sendFile(path.resolve('public', 'index.html'))
})

var PORT = process.env.PORT || 8080
app.listen(PORT, function () {
    console.log('Production Express server running at localhost:' + PORT)
})