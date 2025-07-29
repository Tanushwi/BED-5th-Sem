const express=require('express');
const fs = require('fs');
const app=express();
app.use(express.static(__dirname+"/public"))//static content folder bhejne k kaam aata h
app.use(express.urlencoded({extended:true}));//to parse form data

// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html");
// })

// app.get("/about.html",(req,res)=>{
//     res.sendFile(__dirname+"/about.html");
// })

app.post('/submit', (req, res) => {
    const { username, email } = req.body;
    const data = `Name: ${username}, Email: ${email}\n`;
    fs.appendFileSync(path.join(__dirname, 'data.txt'), data);
     res.send('<h2>Thank you! Your data has been submitted.</h2><a href="/registration.html">Back to Registration</a>');
});

app.post("/adduser",(req,res)=>{
    console.log(req.body);
    let username=req.body.username;
    let password=req.body.password;
    res.json({
        username,
        password
    })
})

app.listen(5555,()=>{
    console.log("server started");
})