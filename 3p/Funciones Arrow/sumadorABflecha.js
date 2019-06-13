
//sumador
let suma=(a,b)=> {
    
    for(let i=a;i<=b;i++){
        var res =res +i;
    };
    return res;
};



//multiplicador 
let mul=(a,b)=>{for(let i=a;i<=b;i++){
    var res =res +i;
};
return res;
};



//al cuadrado 


let cuadrado=(a)=> {
    var cuadrado=  a*a*a
    return cuadrado;

};

//cubo


let cubo=(a)=> {
  var cubo=  a*a*a
  return cubo;
};
//raiz 
let square =(a)=>{
    var i=0;var x1; var x2;
    while((i*i)<=a)
        i+=0.1;
    x1=i; 
    for(let j=0;j<=10;j++){
        x2=a;
        x2/=x1;
        x2+=x1;
        x2/=2;
        x1=x2;
    };
    return x2;
    };


//exponentes
const power =(base,exponente)=>{
    let result =1;
    for(let count=0;count<exponente;count++){
        result*=base;
    }
    return result;
};


//Math.pow(2,3);
