(function (x) { return x; } )(2);

(function(x) {
    return function (y) {
        return x*y;
    };
}) (2)(3);

(function (x) {
    return function(y){
        return x*y;
    };
})(2)(3)

(function(x){
    return function(y){
        return function(z){
            return x+y+z;
        };
    };
})(1)(2)(3)