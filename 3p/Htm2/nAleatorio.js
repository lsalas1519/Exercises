function decimal() {
    var res = "";
    var avg = 0;
    var max = 0;
    var min = 10;
    var num = document.getElementById("i");
    i = document.getElementById('i').value;
    for (j = 0; j < i; j++) {

        var aleatorio = Math.round(Math.random() * 10);
        res = res + aleatorio + "\n";

        if (max < aleatorio) {
            max = aleatorio;
        }
        if (aleatorio < min) {
            min = aleatorio;
        }
        avg=avg+parseInt(aleatorio);



    }


    document.getElementById('mostrar').value = res;
    document.getElementById('mayor').value = max;
    document.getElementById('menor').value = min;
    document.getElementById('avg').value = (avg/i);


}