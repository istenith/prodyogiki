const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/myDb', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error',()=>console.log('error connecting to the database!'))
.once('open',()=>console.log('connected to the database'));

var userScheema = new mongoose.Schema({
    player_name : String,
    player_phone : Number,
    player_email : String
},{versionKey:false});

var User = new mongoose.model('user',userScheema);

var data = new User({
    player_name : "Parth",
    player_phone : 7876082603,
    player_email : "parthpant4@gmail.com"
});
data.save()
.then((item)=>{
    console.log(item);
})
.catch(err=>console.log(err));
