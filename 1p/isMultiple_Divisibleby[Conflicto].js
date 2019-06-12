//Es Entero
console.log('Entero')
function isInteger(num){
    
    if(typeof num==='number'){
        if(num%1===0){return true }else return false
    

    }

}
console.log(isInteger(4));
console.log(isInteger(4.5));

//divisible
console.log('divisible')
function isDivisible(a,b){
    if((a%b)===0){return true}else return false;
    
}
//multiplo
function isMultipleof(a,b){
return !isDivisible(a,b);
}
console.log(isDivisible(22,3))
console.log(isDivisible(6,3))

 console.log('multiplo')
 console.log(isMultipleof(6,3))
 console.log(isMultipleof(3,6))
 