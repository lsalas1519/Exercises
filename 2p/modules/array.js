    var array1=[];//recomendado 
    var array2 = new Array();

    //segundo ejemplo for.js
    
    var arr =[2,3,4,5,6];

    for (k=0;k<arr.length;k++){
        console.log(arr[k]);
    }
    //for of ejemplo con arr 
   // for(var x of arr){
     //   console.log(x);
    //}




    // ejercicios De clase del 3 de abril del 2019
    //constructor

    //código

    //Inicialize

    //código

    //min
    function min(){
    
        let arr=[2,3,4,5,6];
        if (Array.isArray(arr)){
        let t= arr[0]
            for (let x of arr){
            if(t>x){
                t=x
            }
        }
        console.log(t);   
    }

    }  
    

    //max
    function max(){
        let arr=[2,3,4,5,6];
        if(Array.isArray(arr)){
        let t= arr[0]
            for (let x of arr){
            if(t<x){
                t=x
            }
        }
        console.log(t);   
        }
    }
    //suma
    function suma(){
        let arr=[2,3,4,5,6];
        if(Array.isArray(arr)){
        var tp=0
            for (let x of arr){
            
                tp=x+tp;
           
        }
        console.log(tp);   

    }
}
    //promedio
    function avg(){
        let arr=[2,3,4,5,6];
        if(Array.isArray(arr)){
        var tp=0
            for (let x of arr){
            
                tp=x+tp;
           
        }
        console.log(tp/arr.length);   
    }
}

// vectorize
function vectorize(a,b,k){
   let resta= b-a;
   let puntos= resta/k;
   let arr=[];
    if(Array.isArray(arr)){
    for(inc=0;inc<=k;inc++){
        
        arr.push(a);N
        a=a+puntos;
    }
    
}
}
//Get Data 
