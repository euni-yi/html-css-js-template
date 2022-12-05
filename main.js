// Animation Intero

// setup canvas and cgraphics contedt
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d")
cnv.width = 600;
cnv.height = 400;

// Global variables
let mouseIsPressed = false;
let mouseX, mouseY, pmouseX, pmouseY;
let size =5;
let penColor = "black";

// Main Program Loop (60fps)
requestAnimationFrame(loop);
function loop(){
    // draw a cricle if mouse is pressed
    if(mouseIsPressed){
        ctx.strokeStyle= penColor;
        ctx.lineWidth = size;
        ctx.beginPath();
        ctx.moveTo(pmouseX, pmouseY)
        ctx.lineTo(mouseX, mouseY)
        ctx.stroke();
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
    // save previous mouse x and y
    pmouseX = mouseX;
    pmouseY = mouseY;

    // update mosueX and mousey
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
    }else if(event.code ==="Digit2"){
        penColor = "blue";   
    }else if(event.code ==="Digit3"){
        penColor = "green"
    }
}

// color evens
document.getElementById("redBtn").addEventListener("click", setRed)
document.getElementById("greenBtn").addEventListener("click", setGreen)
document.getElementById("blueBtn").addEventListener("click", setBlue)
document.getElementById("colorPicker").addEventListener("change", changeColor);

function setRed(){
    penColor = "red";
}
function setGreen(){
    penColor = "green";
}
function setBlue(){
    penColor = "blue";
}
function changeColor(){
 penColor = document.getElementById("colorPicker").value;
}