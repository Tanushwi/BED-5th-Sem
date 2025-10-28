const express=require("express");
const {Queue,Worker}=require("bullmq");
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

let predictionQueue=new Queue("predict",{
    connection:{
        host:"localhost",
        port:6379
    },
})


//producer
async function addJobs() {
  let job=await predictionQueue.add('predict', { foo: 'bar' });
  //await predictionQueue.add('myJobName', { qux: 'baz' });
  return job;
}

// addJobs()
// .then((job)=>{
//     console.log(job.id);
// })

//consumer-------> worker
const myworker=new Worker("predict",async(job)=>{
    console.log(job.id);
},{
    connection:{
        host:'localhost',
        port:6379
    },
})


app.listen(4334,()=>{
    console.log("server started");
})