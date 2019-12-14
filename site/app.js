var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var nodemailer = require('nodemailer');
var Email = require('email-templates');
var path = require('path');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
           user: 'teamiste@gmail.com',
           pass: 'teamisterocks'
       }
});
//Email Template
const email = new Email({
    message: {
      from: 'Team ISTE'
    },
    // uncomment below to send emails in development/test env:
    send: true,
    preview: false,
    transport: transporter
});

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

app.set('view engine', 'pug')

app.post('/regPlayer',(req,res)=>{
    var data = new User(req.body);
    var mailid;
    //////validation code

    User.findOne({'email':data.email},(err,result)=>{
        if(result == null){
            data.save()
            .then((item)=>{
            mailid = item._id;
            res.render('register',{title: "User Registration", id: item._id});
            console.log(item);
            })
            .then(()=>{
                email.send({
                    template: path.join(__dirname,'emails','user'),
                    message: {
                        to: data.email
                        },
                        locals: {
                            id: mailid,
                            name: data.name,
                        }
                })
            })
            .then(()=>console.log("email sent"))
            .catch(err=>console.log(err));
        }
        else{
            res.send("The email has already been registered");
        }
    })
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
    ///////validation code
    team.save()
    .then((item)=>{res.send("your Team_id is "+item._id);
        console.log(item);
    })
    .catch(err=>res.status(404).send(err));
});

app.listen(port);
