const mongoose = require('mongoose');

const schema =new mongoose.Schema({ 
    name:String,
    email:String,
    password:String,
    college:String,
    text:String,
    password:String,
    items:Array,
    genre:String,
    address:String,
    data:String,
});

module.exports = mongoose.model('restros' , schema);