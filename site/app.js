const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');

const app = new express();
const port = 3000;

mongoose.connect('mongodb://localhost/myDb', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error',()=>console.log('error connecting to the database!'))
.once('open',()=>console.log('connected to the database'));

var userScheema = new mongoose.Schema({
    _id : {
        type : String,
        default : shortid.generate
    },
    name : String,
    phone : Number,
    email : String
},{versionKey : false});

var User = new mongoose.model('user',userScheema);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static('public'));

app.post('/regPlayer',(req,res)=>{
    var data = new User(req.body);
    data.save()
    .then((item)=>{res.send("your password is "+item._id);
        console.log(item);
    })
    .catch(err=>res.status(404).send(err));
});

app.listen(port);