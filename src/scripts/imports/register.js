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

export function watchTabs(){
    var make  = document.getElementById('make')
    var join = document.getElementById('join')

    document.getElementById('joinTeam').style.display='none';
    document.getElementById('regTeam').style.display='block';

    document.getElementById('join').style.color='#0082af';
    document.getElementById('make').style.color='#00ff66';

    make.addEventListener('click',event=>{
        document.getElementById('joinTeam').style.display='none';
        document.getElementById('regTeam').style.display='block';

        document.getElementById('join').style.color='#0082af';
        document.getElementById('make').style.color='#00ff66';
    })

    join.addEventListener('click',event=>{
        document.getElementById('regTeam').style.display = 'none';
        document.getElementById('joinTeam').style.display='block';

        document.getElementById('join').style.color='#00ff66';
        document.getElementById('make').style.color='#0082af';
    })
}
