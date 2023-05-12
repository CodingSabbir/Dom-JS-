
var btn=document.querySelector('#btn');

function date(){
 var time= document.querySelector('#time');
 time.innerHTML=Date();
 btn.style.color='white'
 btn.innerHTML='time Success'
 btn.style.backgroundColor='green';
}