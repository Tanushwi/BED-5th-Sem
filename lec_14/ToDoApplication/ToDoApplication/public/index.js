//fetch
fetch("http://localhost:1427/todos")
.then((response)=>response.json())
.then((data)=>console,log(data))