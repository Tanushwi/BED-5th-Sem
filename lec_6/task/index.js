//writing data in another file after reading 2 files

// const fs=require('fs');
// fs.readFile("../demo.txt","utf-8",function(err,data1){
//     if(err) return console.log(err);
//     fs.writeFile("../temp.txt",data1,function(err){
//         if(err) return console.log(err);
//         console.log("success1!!");
//     })
    
//     fs.readFile("../b.txt","utf-8",function(err,data2){
//     if(err) return console.log(err);
//     fs.writeFile("../temp.txt",data1+data2,function(err){
//         if(err) return console.log(err);
//         console.log("success2!!");
//     })
// })
// })


const fs=require('fs');
fs.readFile("../demo.txt","utf-8",function(err,data){
    if(err) return console.log(err);
    let data1=data;
    fs.readFile("../b.txt","utf-8",function(err,data){
        if(err) return console.log(err);
        let data2=data;
        let result=data1.split(" ")+"\n"+data2.split(" ");
        fs.writeFile("../temp.txt",result,function(err){
            if(err) return console.log(err);
            console.log("done");
        })
    })
})
//space htao




