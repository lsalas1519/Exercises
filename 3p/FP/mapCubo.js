
let Cube = function(list){
    return list.map(function(number1){
        return number1 * number1*number1;
    });

    
}

let a1=[1,2,3,4,5,6,7,8,9,0];
    console.log(Cube(a1));//resultado

    // Cuadrado

    let Square = function(list){
        return list.map(function(number2){
            return number2 * number2;
        });
    
        
    }
    
    let a2=[1,2,3,4,5,6,7,8,9,0];
        console.log(Square(a2));//resultado
    
        // restar 3

        let subt3 = function(list){
            return list.map(function(number3){
                return number3 - 3;
            });
        
            
        }
        
        let a3=[1,2,3,4,5,6,7,8,9,0];
            console.log(subt3(a3));//resultado
        