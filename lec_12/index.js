let box=document.querySelector("#box");
let btn=document.querySelector("#btn");
let stop=document.querySelector("#stop");
let colors=["red","black","green","yellow","brown","pink","blue","purple","orange","grey"]
let id=null;

function generateRandomColor() {
    let index=Math.floor(Math.random()*10)-1;
    console.log(index);

    let randomColor=colors[index];
    console.log(randomColor);
    box.style.backgroundColor=randomColor;
}

btn.addEventListener("click",function(){
    id=setInterval(()=>{
        generateRandomColor();
    });
});

stop.addEventListener("click",function(){
    if(id)
        clearInterval(id);
});