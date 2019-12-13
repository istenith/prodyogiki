var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//loading models
var User = require('./models/user');
var Team = require('./models/team');

//hosting the front end
var app = new express();
var port = 3000;

//coneectiong to backend
mongoose.connect('mongodb://localhost/myDb', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error',()=>console.log('error connecting to the database!'))
.once('open',()=>console.log('connected to the database'));

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

app.post('/regTeam',(req,res)=>{
    var recieved_data = req.body;
    var data = {
        name : recieved_data.team_name,
        leader :recieved_data.team_leader_id,
        members : [recieved_data.team_member_2, recieved_data.team_member_3, recieved_data.team_member_4 ,recieved_data.team_member_5],
        event : recieved_data.event
    }
    team = new Team(data)
    team.save()
    .then((item)=>{res.send("your Team_id is "+item._id);
        console.log(item);
    })
    .catch(err=>res.status(404).send(err));
});


app.listen(port);
