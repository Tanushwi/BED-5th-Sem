// const fs=require('fs');

// //utf-> encode the data

// fs.readFile("../users.txt","utf-8",function(err,data){
//     if(err) return console.log(err);
//     //console.log(data[0]);

//     //JSON.parse convert string to object
//     let users=JSON.parse(data);
//     console.log(users[0]);
// })

const fs=require("fs");

const {read} = require("../IO/io.js");

async function readusers(){
    let users = await read("../users.txt")
    let users2=await read("../users2.txt");
    console.log(users)
    console.log(users2)
} 

readusers();