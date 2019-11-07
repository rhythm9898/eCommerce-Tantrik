//open terminal (ctrl+shift+~) goto address E:\eCommerce-Tantrik then 
//git add -A  
//git commit -m "type message jo kuch hint de ki tune iss baar kya add/change kiya"
//git push origin master
//check your progress on gitHub @   https://github.com/namishagg2602/eCommerce-Tantrik
// cd .. 



var express = require('express')
app = express()
var server = app.listen(process.env.PORT || 8080, function() {
    console.log("server is running")
})
var mongoose = require('mongoose')

var userschema = mongoose.Schema({
    name: String
});


mongoose.connect('mongodb://localhost:27017/XXXXXXX', { useNewUrlParser: true })


var USER = mongoose.model('USER', userschema)

var u = USER({ 'name': 'ajit' })
u.save();