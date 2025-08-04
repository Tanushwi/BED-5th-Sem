//fetch
fetch("http://localhost:5555/todo")
.then((response)=>response.json())
.then((data)=>console.log(data))