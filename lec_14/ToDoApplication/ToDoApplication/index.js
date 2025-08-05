const express=require("express")
const app=express()
const fs=require("fs")

app.use(express.static(__dirname+"/public"));

app.get("/todos",(req,res)=>{
    fs.readFile("./todos.json","utf-8",function(err,data){
       if(err) return res.send(err);
       let todos=JSON.parse(data)
       res.json(todos)
    })
})

app.listen(1427,()=>{
    console.log("server started")
})