// Animation Intero

// setup canvas and cgraphics contedt
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d")
cnv.width = 600;
cnv.height = 400;

// Global variablwes
let rectX = 100;
let rectSize = 80
let rectBlue = 225;
let rectRed = 0;
let frameCount = 0;
let spaceKeyIsPressed = false;


// Main Program Loop (60fps)
requestAnimationFrame(loop);
function loop(){
    // ?Update Vaqribales
    // rectX += Math.random()*10-5
    if(spaceKeyIsPressed){
    rectX +=1;
    rectSize += Math.random()*2-1;
    rectBlue --;
    rectRed++;  
}  
    // deraw a background
    ctx.fillStyle = "white";
    ctx.fillRect (0, 0, cnv.width, cnv.height);

    // draw a square
    ctx.fillStyle = "rgb("+rectRed +", 0, "+rectBlue+")";
    ctx.fillRect(rectX, 150, rectSize , rectSize);    
    
    requestAnimationFrame(loop)
}


// event stuff
document.addEventListener("keydown", keydownHandler)
document.addEventListener("keyup", keyUpHandler)

function keydownHandler(event){
    if(event.code=="Space"){
       spaceKeyIsPressed = true;  
    }
   
}
function keyUpHandler(event){
    if(event.code=="Space"){
       spaceKeyIsPressed = false;  
    }
   
}
