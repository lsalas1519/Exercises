var aPoint={
    x:3,
    y:4
}
var bPoint={
    x:-3,
    y:-4,
    distanciaA: function distanciaA(aPoint){
        var x1=this.x-aPoint.x
        var y1=this.y-aPoint.y
        d=Math.sqrt((x1*x1)+(y1*y1))
        return(d)
    }
}
