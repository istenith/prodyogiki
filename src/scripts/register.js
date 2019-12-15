function isPhoneNumber(input) {
    var phoneno = /^([0|\+[0-9]{1,5})?([0-9]{10})$/;
    return phoneno.test(input); 
}

function isEmail(input){      
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(input); 
}

function handleSelectChange(){
    var select=document.getElementById("select");
    var event=select.options[select.selectedIndex].value;
    var members = select.options[select.selectedIndex].id;
    var input_nodes = document.querySelectorAll('.regMembers > div');
    console.log("EVENT: "+event+" members: "+members);
    for(var i=0;i<input_nodes.length;i++){
        var textboxdiv = input_nodes[i].childNodes[1];
        var textbox = textboxdiv.firstChild;
        textbox.value = '';
        console.log(textbox)
        if(i+2>members){
             input_nodes[i].className='clear';
            continue;
        }
        input_nodes[i].className='member_div';
    }
    document.getElementById('limit_lable').innerHTML = members;
}

window.onload = handleSelectChange;
