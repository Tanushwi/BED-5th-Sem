let edit = document.querySelector('.edit');
let del = document.querySelector('.delete');

/*
parent
child
siblings
*/
//1. nextElementSibling
//2. previousElementSibling
console.log(edit.nextElementSibling); // will give the next sibling element
console.log(edit.previousElementSibling); // will give the previous sibling element
console.log(edit.nextElementSibling.nextElementSibling.innerText); // will give the next sibling's next sibling's innerText
//h1
console.log(edit.parentElement.previousElementSibling); // will give the parent element of edit

//from del to li
let id=del.parentElement.parentElement.parentElement.getAttribute("id"); // will give the parent element of del's parent element's parent element
console.log(id); // will log the id of the parent element