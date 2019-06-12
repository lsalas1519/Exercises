print('ingresa el primer número');
var x=parseInt(readline());
print('ingresa el segundo número');
var y=parseInt(readline());
print('ingresa el tercer número');
var z=parseInt(readline());
if (x==0){
    print('El primer número ingresado '+x+' es el elemento neutro aditivo')
}else if(y==0){
    print('El segundo número ingresado '+y+ ' es el elemento neutro aditivo')
}else if(z==0){
    print('El tercer número ingresado '+z+ ' es el elemento neutro aditivo')
}
//
if (x<0){
    print('El primer número ingresado '+x+' es negativo. Su cuadrado es:'+ (x*x));
}
else if(y<0){
    print('El segundo número ingresado '+y+ ' es negativo. Su cuadrado es: ' +(y*y))
}
else if(y<0){
    print('El tercer número ingresado '+z+ ' es negativo. Su cuadrado es: '+(z*z))
}

// perimeto del triángulo
var per=parseInt(x+y+z);
print('El perimetro del triángulo con las medidas dadas es de: '+ per);

//Formula matemàtica
var d =parseFloat( y*y-(4*x*z))
x1=parseFloat((-y+Math.sqrt(d))/(2*x))
x2=parseFloat((-y-Math.sqrt(d))/(2*x))
print('x1= '+x1);
print('x2= '+x2);