var express = require('express')
app = express()
var server = app.listen(process.env.PORT || 8080, function() {
    console.log("server is running")
})
var mongoose = require('mongoose')

var userschema = mongoose.Schema({
    name: String,

});


mongoose.connect('mongodb://localhost:27017/XXXXXXX', { useNewUrlParser: true })


var USER = mongoose.model('USER', userschema)

var u = USER({ 'name': 'ajit' })
u.save();