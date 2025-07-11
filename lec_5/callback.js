let products = [
    { name: "samsung", amount: 70000, quantity: 10 },
    { name: "Iphone 16", amount: 100000, quantity: 2 }
];

let account_balance = 300000;

function buyProduct(product_name){
    return new Promise((resolve,reject)=>{
            let isproduct =null
            //implement for loop to find product in an array
            //find product object from product array who's name is eual to product_name

            for(let i =0 ; i<products.length;i++){
                // console.log( products[i].name==product_name);

                if(products[i].name==product_name){
                    isproduct=products[i];
                }
            }
            if(!isproduct){
               return reject("no product found");
            }
            
            else{
                resolve(isproduct.amount);
            }
    });
}


function deductAmount(amount){
    return new Promise((resolve,reject)=>{
        if(amount>account_balance){
        return reject ("your account balanace is low")
    }else{
        account_balance-=amount;
        return resolve("your product is purchased")  
    }
    })
}


// buyProduct("Iphone 16")
// .then((data)=>{
//     return deductAmount(data);
// })

// .then((message)=>{
//     console.log(message);
//     console.log(account_balance);
// })

// .catch((err)=>{
//     console.log(err);
// })

async function myFunc(){
    try{
        let amount=await buyProduct("samsung");
        let message=await deductAmount(amount);
        console.log(message);
    }
    catch(error){
        console.log(error);
    }
}
console.log(myFunc());

console.log("start");
console.log("end");