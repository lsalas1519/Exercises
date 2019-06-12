//doubles using For each
let doubleFE= function(list){
    let result=[];
    list.forEach(function(number){
        result.push(number*2);
    });
    return result;
}
let a=[5,4,3,2,1];
console.log(doubleFE(a)); // resultado

//tercer ejemolo dle dia lunes 13 de mayo del 2019


// doubkes using map :: no for each: no k

let doubleWM = function(list){
    return list.map(function(number1){
        return number1 *2;
    });
    
}
let a1=[5,4,3,2,12];
    console.log(doubleWM(a1));//resultado
     


    // tercer ejemplo

    ['1','2','3'].map(parseFloat);
    

    [1,'2',true,[4,5]].map(function(n){return typeof(n)});

    [1,2,3].map(
        function()
    )