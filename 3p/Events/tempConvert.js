
//
// this may be a class, object, module, or function
//
function convert() {
    let t = document.getElementById("temp").value
    let o = (t-32)/1.8
    document.getElementById("out").innerHTML = o.toFixed(2) + " degrees F"
}

//ignorar esto no es de aquí 
 var listado = Array(30,-40,-20,-10,40,0,10,5);
 aleatorio=Math.floor(Math.random()*(listado.length));
 seleccion=listado[aleatorio]
 trace(seleccion);

var Total = Number(listado.length);
for (i=0; i&lt;Total; i++) {
aleatorio = Math.floor(Math.random()*(listado.length));
seleccion = listado[aleatorio];
trace(seleccion);
listado.splice(aleatorio, 1);
}
(function(){

})()

//Cierra clase 