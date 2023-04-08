let value;

// value=document.getElementById('second');
// value=document.getElementsByClassName('first');
// value=document.getElementsByTagName('body');
// value=document.querySelector('#btn');
// value=document.querySelector('.textarea');
// value=document.querySelectorAll('.product')[0];


// value=document.getElementsByClassName('first')
// for(let i=0; i<value.length; i++){
//     console.log(value[i])
// }


value=document.querySelectorAll('.first')
for(let node of value){
    console.log(node)
}



