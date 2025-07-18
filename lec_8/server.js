const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    console.log(req);
    //res.send("hello world")
    // res.send("<h1>Hello World")

    res.json({
        name:"Tanushwi",
        address:"Ambala",
        isLogin:true
    })
})

//path parameter/variable
//1. request params
app.get("/users/:id/",(req,res)=>{
    let id=req.params.id;
    console.log(req.params.id);
    res.send(id);
})

//2. query parameter
app.get("/blogs",(req,res)=>{
    console.log(req.query.title);
    res.send("got it");
})

app.listen(2222,()=>{
    console.log("server started");
})