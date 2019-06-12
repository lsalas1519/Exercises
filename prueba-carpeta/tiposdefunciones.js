//comun
function foo(){
    console.log('me llamo foo')

}
//anonima
var bar=function(){
    console.log('me llamo bar')
};

// anonima iife
(function(){
    console.log('esta funcion se invoca inmediatamente')
})();

//alternate syntax
(function(){
    console.log('this function is ALSO invoked immediatly!');
})()

//estas tienen que invocarse
foo();
bar();