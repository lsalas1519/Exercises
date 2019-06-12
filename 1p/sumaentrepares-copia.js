var i=3;
var suma=0;
while(i<9){
    i++;
    if (typeof i === 'number') {
        if (i % 2 == 0) {
            suma = suma + i;
            print(i)
        }
    } else {
        print('No se pudo efectuar la suma');
    }
}
print (suma+' es el resultado')
