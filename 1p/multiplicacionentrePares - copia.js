var i=3;
var mul=1;
while (i < 9) {
    if (typeof i === 'number') {
        i++;
        if (i % 2 == 0) {
            mul = mul * i;
            print(i)
        }
    } else {
        print('No existe un número ')
    }
}
print (mul+' es el resultado')