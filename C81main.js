var Canvas= document.getElementById("myCanvas")
ctx= Canvas.getContext("2d")

var Color= "red"
var width= 4
ctx.beginPath();
ctx.strokeStyle= Color;
ctx.lineWidth= width;
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke()
Canvas.addEventListener("mousedown",md)
function md(e){
    mouse_X= e.clientX-Canvas.offsetLeft
    mouse_Y= e.clientY-Canvas.offsetTop
    circle(mouse_X, mouse_Y)
}

function circle(mouse_X, mouse_Y)
{
    ctx.beginPath();
    ctx.lineWidth= width;
    ctx.strokeStyle= Color;
    ctx.lineWidth= width;
    ctx.arc(mouse_X,mouse_Y,50,0,2*Math.PI);
    ctx.stroke()
}