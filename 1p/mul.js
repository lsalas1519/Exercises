
//regresa multi
function echo(v1, v2){
    
    function echo(v1, v2) {
        if (typeof v1 === 'number' && typeof v2 === 'number') {
            return (v1* v2);
        } else {
            return ('No se ha podido efectuar la multiplicación ya que alguno de los dos digitos no es un numero.');
        }
    }

};
    
print(echo(5,7));
print('done');