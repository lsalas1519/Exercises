print("Ingresa el numero correspondiente a un dia de la semana")
var day =parseInt(readline());
switch(day){
case 1:{print('Lunes');break;}
case 2:{print('Martes');break;}
case 3:{print('miercoles');break;}
case 4:{print('Jueves ');break;}
case 5:{print('Viernes');break;}
case 6:{print('Sabado');break;}
case 7:{print('Domingo');break;}
 default:{print('Error de entrada '+day);break;}   
}
