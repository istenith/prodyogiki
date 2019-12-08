window.addEventListener('load',()=>{
    // Your web app's Firebase configuration
    var firebaseConfig = {
    apiKey: "AIzaSyBfenYBHV68tbFC0pwXOzs8xPmSiziH-fc",
    authDomain: "prody20-8da6d.firebaseapp.com",
    databaseURL: "https://prody20-8da6d.firebaseio.com",
    projectId: "prody20-8da6d",
    storageBucket: "prody20-8da6d.appspot.com",
    messagingSenderId: "560206649463",
    appId: "1:560206649463:web:68524020f25e4d2ca88e72",
    measurementId: "G-WDXSLBCYTX"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();

    // db.collection("users").add({
    //     first: "Alan",
    //     middle: "Mathison",
    //     last: "Turing",
    //     born: 1912
    // })
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });

    // db.collection("users").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.data());
    //     });
    //});
    

    
    
});
