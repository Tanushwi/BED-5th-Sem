const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8088 });




//rooms functionality
let rooms=new Map();
// {
//     "1234":{s1,s2,s3}
// }


wss.on('connection', function(socket){
    console.log('a new user connected')
    socket.on('message', function(message) {
        // {"type":"join"||"chat":"Payload":{"roomId":"value"}}
        let parseMessage;
        parseMessage = JSON.parse(message);
        if(parseMessage.type==="join" && parseMessage.Payload && parseMessage.Payload.roomId){
            let roomId=parseMessage.Payload.roomId;
            console.log(rooms)
            if(!rooms.get(roomId)){
                // rooms.set(roomId,new Set())
                return socket.send("room doesn't exist")
            }
            rooms.get(roomId).add(socket)
            socket.roomId=roomId;
            socket.send("you are added to room"+" "+roomId)
            console.log(rooms)
        }
        else if(parseMessage.type==="chat"){
            let roomId=socket.roomId;
            let message=parseMessage.Payload.message;
            let allclients=rooms.get(roomId);
            allclients.forEach(s=>{
                s.send(message)
            });
        }
        else if(parseMessage.type==="create"){
            // create a room id and send it to user using uuid
            let roomId=Math.floor(Math.random()*100000000).toString();
            rooms.set(roomId,new Set())
            console.log(rooms)
            socket.send(roomId)
        }
    })
})


// function(req,res,next)=>{
//     req.userId
// }