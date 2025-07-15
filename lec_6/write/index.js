const fs=require('fs');


fs.writeFile("../demo.txt","Hello G27",function(err){
    if(err) return console.log(err);
    console.log("success!!");
    fs.writeFile("../b.txt","I am writing b file",function(err){
    if(err) return console.log(err);
    console.log("Done!");
})
})
