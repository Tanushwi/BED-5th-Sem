class OrderBook{
    constructor(symbol){
        this.symbol = symbol;
        this.bids=[];
        this.asks=[];
        this.currentPrice=null;
        this.trades=[];
    }
    _sort(side){
        if(side=="BUY"){
            this.bids.sort((a,b)=>{
            if(a.price!=b.price){
                return b.price-a.price; //sort ascending to price
            }
            return a.timestamp-b.timestamp;//sort ascending to time
            }); //lexiographically
        }
        else{
            this.asks.sort((a,b)=>{
            if(a.price!=b.price){
                return a.price-b.price;
            }
            return a.timestamp-b.timestamp;
            });
        }
    }
    placeOrder(price,quantity,type,side,user){
        let newOrder={
            symbol:this.symbol,
            orderId:Math.floor(Math.random()*1000000),
            side:side,
            type:type,
            price:price || null,
            originalQty:quantity,
            executedQty:0,
            remainingQty:quantity,
            user:userName,
            timestamp:Date.now()
        }
        if(order.type=="LIMIT"){
            let result=this._LimitMatch();
        }
        else{
            let result=this._MarketMatch();
        }
    }
    _LimitMatch(){
        if(order.side=="BUY"){
            //115 buy 10,110,111,115
            let askArr=this.asks;
            while(order.remainingQty>=0 && askArr.length>0)
            {
                let top=askArr[0];;
                if(top.price<=order.price){
                    let buyQuantity= Math.min(top.quantity,order.quantity);
                    //update --> order
                    order.executedQty+=buyQuantity;
                    order.remainingQty-=buyQuantity;

                    top.executedQty+=buyQuantity;
                    top.remainingQty-=buyQuantity;

                    if(top.remainingQty==0){
                        askArr.shift();
                    }
                }
                else{
                    break;
                }
            }
            return order;
        }
        else if(order.side=="SELL"){
            let bidArr=this.bids;
            while(order.remainingQty>=0 && bidArr.length>0)
            {
                let top=bidArr[0];;
                if(top.price>=order.price){
                    let sellQuantity= Math.min(top.quantity,order.quantity);
                    //update --> order
                    order.executedQty+=sellQuantity;
                    order.remainingQty-=sellQuantity;
                    top.executedQty+=sellQuantity;
                    top.remainingQty-=sellQuantity; 
                    if(top.remainingQty==0){
                        bidArr.shift();
                    }
                }
                else{
                    break;
                }
            }
            return order;
        }
        else{
            return "Invalid Order Side";
        }
    }
    _MarketMatch(){
    
    }
}

let BTCUSDOrderBook = new OrderBook("BTC-USD");
BTCUSDOrderBook.bids.push({price:"102",quantity:10,type:"LIMIT",user:"Tanushwi"});
BTCUSDOrderBook.bids.push({price:"103",quantity:10,type:"LIMIT",user:"Ramneet"});
BTCUSDOrderBook.bids.push({price:"101",quantity:10,type:"LIMIT",user:"Yashika"});
console.log(BTCUSDOrderBook.bids);
BTCUSDOrderBook._sort("BUY");
console.log(BTCUSDOrderBook.bids);


BTCUSDOrderBook.asks.push({price:"104",quantity:10,type:"LIMIT",user:"Tanushwi"});
BTCUSDOrderBook.asks.push({price:"105",quantity:10,type:"LIMIT",user:"Ramneet"});
BTCUSDOrderBook.asks.push({price:"103",quantity:10,type:"LIMIT",user:"Yashika"});
console.log(BTCUSDOrderBook.asks);
BTCUSDOrderBook._sort("SELL");
console.log(BTCUSDOrderBook.asks);


//if a function start with underscore