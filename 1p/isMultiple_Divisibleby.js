//Es Entero
print('Entero')
function isInteger(num){
    
    if(typeof num==='number'){
        if(num%1===0){return true }else return false
    

    }

}
print(isInteger(4.4));
print(isInteger(4));



//divisible
print('divisible')
function isDivisible(a,b){
    if((a%b)===0){return true}else return false;
    
}


//multiplo
function isMultipleof(a,b){
return isDivisible(a,b);
}
print(isDivisible(22,3))
print(isDivisible(6,3))

print('multiplo')
print(isMultipleof(6,3))
print(isMultipleof(3,6))