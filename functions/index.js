const functions = require('firebase-functions');
//const admin = require('firebase-admin');
// const nodemailer = require('nodemailer');
// const cors = require('cors')({origin: true});
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
// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'teamiste@gmail.com',
//         pass: 'teamisterocks'
//     }
// });

// exports.sendMail = functions.firestore
// .document('/players/{playerId}')
// .onCreate((snapshot,context)=>{
      
//     // getting dest email by query string
//     const dest = snapshot.data().email;

//     const mailOptions = {
//         from: 'Team ISTE <teamiste@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
//         to: dest,
//         subject: 'Registered', // email subject
//         html: `<p style="font-size: 16px;">You are now registered!!</p>
//             <br />
//             <img src="../src/resources/logos/ISTE.png" />
//         ` // email content in HTML
//     };

//     // returning result
//     return transporter.sendMail(mailOptions, (erro, info) => {
//         if(erro){
//             return res.send(erro.toString());
//         }
//         return res.send('Sended');
//     });
// });  

