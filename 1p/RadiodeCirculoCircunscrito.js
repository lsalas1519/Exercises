var a=5;
var b=8;
var c=12;
var s=0.5*(a+b+c);
var R= (a*b*c)/ ((Math.sqrt((s*(s-a)*(s-b)*(s-c))))*4)
//var r= Math.sqrt((s*(s-a)*(s-b)*(s-c)))/s
print("Radio de un circulo circunscrito: con los datos: "+a,b,c);
print("Las operaciones nos dan como resultado: "+R);
