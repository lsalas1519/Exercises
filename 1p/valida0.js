
//regresa suma
function argrequired(arg){
    if(arg ===0){
    throw new Error('zero div');    
    }
    else{ return arg}


}
print(argrequired(5));//error
argrequired(0);//Correcto
