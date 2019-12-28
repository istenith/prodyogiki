var textboxdiv;
var textbox;
var members;
var input_nodes;

export function handleSelectChange(){
    var select=document.getElementById("selectelement");
    members = select.options[select.selectedIndex].id;
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

    // document.getElementById('make').style.borderBottom='5px solid #fff';
    // document.getElementById('join').style.borderBottom='none';

    make.addEventListener('click',event=>{
        document.getElementById('joinTeam').style.display='none';
        document.getElementById('regTeam').style.display='block';

        document.getElementById('join').style.color='#0082af';
        document.getElementById('make').style.color='#00ff66';

        // document.getElementById('make').style.borderBottom='5px solid #fff';
        // document.getElementById('join').style.borderBottom='none';
    })

    join.addEventListener('click',event=>{
        document.getElementById('regTeam').style.display = 'none';
        document.getElementById('joinTeam').style.display='block';

        document.getElementById('join').style.color='#00ff66';
        document.getElementById('make').style.color='#0082af';

        // document.getElementById('join').style.borderBottom='5px solid #fff';
        // document.getElementById('make').style.borderBottom='none';
    })
}


export function confPass(){
    var pw = document.getElementById('password');
    var conf_pw = document.getElementById('conf_password');

    conf_pw.addEventListener('change',()=>{
        if(pw.value != conf_pw.value){
            document.getElementById('message').innerHTML = 'Conformation password is not the same'
        }else{
            document.getElementById('message').innerHTML = ''
        }
    })
}