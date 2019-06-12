var aPoint={
    x:3,
    y:4
}
var bPoint={
    x:-3,
    y:-4
}
function distanciaA(p1,p2){
var x1=p2.x-p1.x
var y1=p2.y-p1.y
d=Math.sqrt((x1*x1)+(y1*y1))
return(d)
}

