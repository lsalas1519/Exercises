
//regresa suma
function echo(v1, v2){
    if(typeof v1==='number' && typeof v2==='number'){
        if(v2==0){
        return ('No se puede efectuar la división entre 0')};
        if (v2!=0){
                return(v1/v2)
        }

} else{
        return('No se ha podido efectual la división entre los digitos por que uno de ellos no es un número')
}
}

print(echo(5,'0'));
print('done');