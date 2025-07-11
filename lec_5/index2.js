let p=new Promise((resolve,reject)=>{
    resolve("okay");
})
// console.log(p);
p.then((data)=>{
    console.log(data);
    console.log("promise completed")
})
.catch((err)=>{
    console.log(err);
})

let users=[
    {
        id:1,
        age:16,
        name:"tanushwi"
    },
    {
        id:2,
        age:18,
        name:"yashi2"
    }
]
function isEligible(id){
    //find user in db
    //check age is greater than or equal to 18
    //if else
    return new Promise((resolve,reject)=>{
    function isEligible(id){
    let user=users.filter((user)=> user.id==id)[0];
    console.log(user);
    if(!user) return "no user found";
    if(user.age>=18)
        return "eligible to vote";
    else
        return "not eligible to vote";
    }
    })
}
isEligible(1).then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})
console.log("hi");
console.log("bye");