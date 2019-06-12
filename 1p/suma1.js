
//regresa suma
function echo(v1, v2){
    if (typeof v1 === 'number' && typeof v2 === 'number') {
        return (v1 + v2);
    } else {
        return ('No se ha podido efectuar la suma ya que alguno de los dos digitos no es un numero.');
    }
}
    
Print(echo(5,5));
Print('done');