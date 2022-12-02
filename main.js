// Animation Intero

// setup canvas and cgraphics contedt
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d")
cnv.width = 600;
cnv.height = 400;

// Global variables
let mouseIsPressed = false;
let mouseX, mouseY;
let size =5;
// Main Program Loop (60fps)
requestAnimationFrame(loop);
function loop(){
    // draw a cricle if mouse is pressed
    if(mouseIsPressed){
        ctx.fillStyle="black";
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, size, 0, 2* Math.PI);
        ctx.fill();
    }
  
    
    requestAnimationFrame(loop)
}

// event stuff
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("mousemove", mousemoveHandler)
document.addEventListener("keydown", keydownHandler);

function mousedownHandler(v  ){
    mouseIsPressed = true;
}
function mouseupHandler()
{
    mouseIsPressed = false;
}
function mousemoveHandler(event){
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function keydownHandler(event){
    console.log(event.code)
    if(event.code==="Space"){
    // deraw a background
    ctx.fillStyle = "white";
    ctx.fillRect (0, 0, cnv.width, cnv.height);
    }else if(event.code =="ArrowUp"){
        size++;
    }else if(event.code =="ArrowDown"){
        size--;
    }else if(event.code=="Digit1"){
        penColor = "red";
    }else if(event.code=="Digit2"){
        penColor = "green";
    }else if(event.code=="Digit3"){
        penColor = "blue";
    }
}
