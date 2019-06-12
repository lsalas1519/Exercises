//Se solicitan los  valores 
var x,y,radio;
var operacion = Number();
print('Ingresa el valor de x');
x=readline();

print('Ingresa el valor de y');
y=readline();

print('Ingesa el valor del radio');
radio=readline();

parseInt(x,y,radio);

operacion = Math.sqrt((x*x)+ (y*y));
if(radio>operacion){
print('El punto ('+x+','+y+') esta dentro de la circunferencia');

}
if(radio<operacion){
    print('El punto ('+x+','+y+') esta fuera de la circunferencia');

}
else{
    print('El punto ('+x+','+y+') esta sobre de la circunferencia');

}