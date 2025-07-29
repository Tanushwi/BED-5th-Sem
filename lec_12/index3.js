//how to insert new element in dom
//1. create a new element --- createElement
//2. add required data in that element --- innerText, innerHTML, classList, style
//3. add that element in parent container --- appendChild or append

let todo={
    id:3435435,
    title:"Todo4"
}

let ul=document.querySelector(".todolist");

function addTodo(todo){
    let li=document.createElement("li");
    li.setAttribute("id",`${todo.id}`);
    li.innerHTML=` <div id="122334354">
                <input type="checkbox" name="" id="checkbox">
                <h1>${todo.title}</h1>
                <div>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati!</p>
                </div>
            </div>`
        ul.appendChild(li);
}
addTodo(todo);