let map = function(list){
    return list.map(function(n){
        if (n === 'a'){
            n = 1;
            return n; 
        } 
        if(n === 'b'){
            n = 2;
            return n;
        }
        if(n === 'c'){
            n = 3;
            return n;
        } else {
            return console.log('Elemento no valido');
        }
    });
};

let a = ['a','b','c','a'];
console.log(map(a));


let s = ['a','c','b','a','b','b','a','d'];
console.log(map(s));