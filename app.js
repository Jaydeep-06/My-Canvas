var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");                 

function draw(){
    ctx.strokeStyle = "black";
    ctx.fillStyle = "#fffc5e";
    circle(380, 250, 80);                              

    ctx.fillStyle = "blue";
    rectangle(340,210,20,20);   
    rectangle(400,210,20,20);                         

    ctx.fillStyle = "purple";
    triangle(380,120,-95,50,95,50);                    

    ctx.fillStyle = "red";
    circle(380, 280, 20);                        
}

//The function that creates rectangle
function rectangle(x,y,wdth,hght) { 
    ctx.beginPath();
    ctx.rect(x,y,wdth,hght);
    ctx.fill();
    ctx.stroke();
}

//The function that creates circle
function circle(x,y,radius) {               
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
}

//The function that creates triangle
function triangle(x,y,dist2x,dist2y,dist3x,dist3y){     
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x+dist2x,y+dist2y);
    ctx.lineTo(x+dist3x,y+dist3y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function erase(){
    ctx.clearRect(0, 0, 800, 500);
}