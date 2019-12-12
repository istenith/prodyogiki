const functions = require('firebase-functions');
//const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
var shortid = require('shortid');
//admin.initializeApp();


//--------------------------------------------------------------------------------------------------------------------------------
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.assignPID = functions.firestore
.document('/players/{playerId}')
.onCreate((snapshot,context)=>{
    shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_');

    var playerId = shortid.generate();

    return snapshot.ref.update({'pid': playerId})
})
//-------------------------------------------------------------------------------------------------------------------------

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'teamiste@gmail.com',
        pass: 'teamisterocks'
    }
});

exports.sendMail = functions.firestore
.document('/players/{playerId}')
.onCreate((snapshot,context)=>{
    // getting dest email by query string
    const dest = snapshot.data().email;

    const mailOptions = {
        from: 'teamiste@gmail.com', // Something like: Jane Doe <janedoe@gmail.com>
        to: dest,
        subject: 'I\'M A PICKLE!!!', // email subject
        html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
            <br />
            <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
        ` // email content in HTML
    };

    return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            console.log(error)
            return 0;
        }
        console.log("Sent!")
    });
});  

