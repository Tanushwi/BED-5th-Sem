const express=require('express');
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Server created");
})

app.post("/data", (req, res) => {
    const data = req.body;
    console.log(data);
    res.json({
        mydata: data
    });
});

app.listen(2552,()=>{
    console.log("server started");
})