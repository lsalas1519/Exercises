i = 3;

while (i < 9) {
    i++;
    if (typeof i === 'number') {
        if (i % 2 == 0) {
            print(i + ' Es un numero par')

        }
    } else {
        print('Uno de los digitos no es un número');
    }
}