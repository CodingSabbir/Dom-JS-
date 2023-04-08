
// const container=document.querySelector('.container');
// const ul=document.querySelector('.navbar');
// const li=document.querySelector('.product');

// container.addEventListener('click',(event)=>{
//     if(event.target.id==='sample'){  
//        event.target.classList.add('custom')
//     }
// })



// const li=document.querySelectorAll('li')
// const ul=document.querySelector('ul');
// const form=document.forms[0];
// const input=document.getElementById('product');


// function inputvalue(event){
//     event.preventDefault();
//     console.log(event.target)
//     console.log(event.type);
//     console.log(input.value);
//     const li=document.createElement('li')
//     li.textContent=input.value;
//     li.className='product';
//     ul.append(li)

// }
// ul.addEventListener('click',(event)=>{
//     if(event.target.id='navbar'){
//         console.log(event.target)
//     }
// })


// form.addEventListener('submit',inputvalue)










const li=document.querySelectorAll('li')
const ul=document.querySelector('ul')
const form=document.forms[0];
const input=document.getElementById('value');


function inputInfo(event){
event.preventDefault();    
console.log('input value:',input.value);
console.log('(event target:',event.target);
console.log('event type:',event.type)
const li=document.createElement('li')
li.textContent=input.value;
li.className='product'
ul.appendChild(li)

}
ul.addEventListener('click',(e)=>{
    if(e.target.id='navbar'){
        console.log(e.target)
    }
})

li.forEach(li=>{
    li.addEventListener('click',inputInfo);
})


form.addEventListener('submit',inputInfo)



