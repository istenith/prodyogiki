var textboxdiv;
var textbox;
var members;
var input_nodes;

export function handleSelectChange(){
    var select=document.getElementById("select");
    //var event=select.options[select.selectedIndex].value;
    members = select.options[select.selectedIndex].id;
    //input_nodes = document.querySelectorAll('.regMembers > div');
    //console.log("EVENT: "+event+" members: "+members);
    // for(var i=0;i<input_nodes.length;i++){
    //     textboxdiv = input_nodes[i].childNodes[1];
    //     textbox = textboxdiv.firstChild;
    //     textbox.value = '';
    //     if(i+2>members){
    //          input_nodes[i].className='clear';
    //         continue;
    //     }
    //     input_nodes[i].className='member_div';
    // }
    document.getElementById('team_limit').value = members;
    document.getElementById('limit_lable').innerHTML = members;
}
