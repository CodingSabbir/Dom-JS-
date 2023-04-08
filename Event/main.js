
// const h1=document.querySelector('h1');
// const li=document.querySelectorAll('li');
// function eventInfo(event){
//     console.log('offsetX',event.offsetX)
//     console.log('offsetY',event.offsetY)
//     console.log('clientX',event.clientX)
//     console.log('clientY',event.clientY)
//     console.log('Clicked Hi')
// }

// li.forEach(li=>{
//     li.addEventListener('click',eventInfo);
// })

const form=document.forms[0]
const input=document.getElementById('smc');

function inputInfo(event){
event.preventDefault();
console.log('type',event.type)
console.log('target',event.target)
console.log('input value:',input.value)
}

form.addEventListener('submit',inputInfo)


