//
// on Array  :sum
//

const myArray=[22,9,60,12,4,56];
const sum =(x,y)=> x+y;
let muSum=myArray.reduce(sum,0);



// segundo ejemplo 
//
//on array : multiplier
//
const array =[4,9,15,16,23,42];
let mul = function(a,b){return a*b};

array.reduce(mul,1);

// tercer ejemplo 
//
// on array : avg
//

const myArray=[22,9,60,12,4,56];
const sum=(x,y)=>x+y;
const avg=myArray=> myArray.reduce(sum,0)/ myArray.length;
console.log(avg(myArray))


// TAREA QUE HACEEE
//On array : both
//
const myArray=[22,9,60,12,4,56];

const avg = arr =>{
    const sc =arr.reduce((ac,val)=>[ac[0]+val,ac[1]+1],[0,0])
    return sc[0]/sc[1]

}

console.log(avg(myArray))

//Otro ejemplo 

function reduce(array,apply,start){
    let current =start;
    for(let element of array){
        current=apply(current,element);

    }
    return current
}
console.log(reduce([1,2,3,4],(a,b)=> a+b,0));