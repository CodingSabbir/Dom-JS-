



// let value=document.querySelector('#navbar')


// value=value.children[0].nextElementSibling.nextElementSibling.parentElement.parentElement
// console.log(value) 



let value=document.querySelector('#navbar')
// 1- Element
// 2- Attribute
// 3- text Node
// 4-comment
// 5-document
// 6-doctype


// value=value.childNodes[3].nodeName

if(value.childNodes[1].nodeType!==3){
    value.childNodes[1].classList.add('MyClass')  
}
console.log(value)




