//Es numero
print('Es numero')
function isnumber(num){
    
    if(typeof num==='number'){
        return typeof num
    }

}

//Even Odd
print('par o impar')
function isEven(n){
if(n%2===0){
    return true;
}else return false;

}
function isOdd(n){
    
        return !isEven(n);
    
    
}
print(isEven(3))

print(isEven(2))

print(isOdd(3))

print(isOdd(2))

//Positivo
print('función para calcular valores positivos y negativos');
function isPositive(x){
if(x>=0){
    return true;
}else return false;

}
function isNegative(x){
    
        return !isPositive(x);
    
    
}
print(isPositive(-3));
print(isPositive(3));
//negative
print('negativos');
print(isNegative(-3));
print(isNegative(3));

