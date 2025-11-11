const OrderBook=require('../service/orderbook');
const db=new OrderBook("BTCUSD");
let publisher=require('../../shared/node_modules/index.js');
module.exports.postPlaceOrder=async (req,res)=>{
    //user,quantity,type,price,side,symbol
    let {type,side,price,quantity,username}=req.body;
    //basic validation
    
    let response=db.placeOrder(price,quantity,type,side,username);
    await publisher.connect();
    await publisher.publish("book:update",JSON.stringify(OrderBook));
    res.json(response);
}
//