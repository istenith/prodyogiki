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


    document.getElementById('join').className="inactive";
    document.getElementById('make').className='active';


    make.addEventListener('click',event=>{
        document.getElementById('joinTeam').style.display='none';
        document.getElementById('regTeam').style.display='block';

        document.getElementById('join').className="inactive";
        document.getElementById('make').className='active';
    })

    join.addEventListener('click',event=>{
        document.getElementById('regTeam').style.display = 'none';
        document.getElementById('joinTeam').style.display='block';

        document.getElementById('join').className="active";
        document.getElementById('make').className='inactive';

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