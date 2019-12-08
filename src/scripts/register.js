function isPhoneNumber(input) {
    var phoneno = /^([0|\+[0-9]{1,5})?([0-9]{10})$/;
    return phoneno.test(input); 
}

function isEmail(input){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input); 
}

function playerSubmit(){
    var player_name = document.getElementById('player_name').value;
    var player_phone = document.getElementById('player_phone').value;
    var player_email = document.getElementById('player_email').value;

    if (isPhoneNumber(player_phone) && isEmail(player_email)){
        //alert("DATA SUBMITTED \n"+"name:"+player_name+"\n"+"phone: "+player_phone+"\n"+"email: "+player_email);
    
        db.collection('players').add({
            name: player_name,
            phone: player_phone,
            email: player_email
        }).then(alert("DATA SUBMITTED \n"+"name:"+player_name+"\n"+"phone: "+player_phone+"\n"+"email: "+player_email))
        .catch((error)=>console.log("error submiting",error)) ; 
    }
    else if(!isPhoneNumber(player_phone) && !isEmail(player_email)){
        alert("Chutiya hai kya");
    }
    else if(!isPhoneNumber(player_phone)){
        alert("invalid phone number");
    }else if(!isEmail(player_email)){
        alert("invalid email")
    }
}