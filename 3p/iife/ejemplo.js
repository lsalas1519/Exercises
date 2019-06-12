//a named function declaration

function foo(){
    console.log('Called foo!');
}

//an anonymous function expression
var bar = function(){
    console.log('Called bar!');
}

//an anonymous iife function
(function(){
    console.log('This function is invoked immediately!');
})();

//alternate syntax
(function(){
    console.log('This function is invoked immediately!');
}());

//these have to be invocated
foo();
bar();