let {WebSocketServer}=require('ws');
let wss=new WebSocketServer({port:4001});
let subscriber=require('../shared/index.js');


wss.on('connection',(socket)=>{
    console.log('user connected');
    async function bookUpdate(){
        await subscriber.connect();
        subscriber.subscriber("book:update",(message)=>{
            console.log(message);
        })
    }
})