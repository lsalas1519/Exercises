class Fraction{
    // validar que el denominador no sea 0, y que el numero sea entero
    //
    constructor (n,d){ 
      if ((typeof n != 'number')||(typeof d != 'number')){
        console.log('El dato inresado no es un número');
      }
        else if (n % 1 != 0 || d % 1 != 0) {
          console.log('El dato ingresado no es un entero por lo que no se puede utilizar');
        } else {
          this.n = n;
          this.d = d;
        }
      };
 EuclidesMCD(n,d){
	 var operacion;
		var max = Math.max(n, d);
		var min = Math.min(n, d);
		do {
			operacion = min;
			min = max % min;
			max = operacion;
		} while (min !== 0);
		d = max;
		return d;
 }
 

 mul(f){
	if (f instanceof Fraction){
	var n = this.n * f.n;
	var d = this.d * f.d;
	var r = this.EuclidesMCD(n,d);
  d = d/r;
  n = n/r;
	return new Fraction(n,d);
	}
   };
    suma(f){
      if (f instanceof Fraction){
        if (this.d === f.d){
        var n = this.n + f.n;
        var d = this.d;
        var r = this.EuclidesMCD(n,d);
          d = d/r;
          n = n/r;
        return new Fraction(n,d);
        } else {
        var n = (this.n * f.d) + (this.d * f.n);
        var d = (this.d * f.d);
        var r = this.EuclidesMCD(n,d);
         d = d/r;
         n = n/r;
        return new Fraction(n,d);
        }
      }
    }
    resta(f){
      if (f instanceof Fraction){
        if (this.d === f.d) {
        var n = this.n - f.n;
        var d = this.d;
        var r = this.EuclidesMCD(n,d);
        d = d/r;
        n = n/r;
        return new Fraction(n, d);
        } else {
        var n = (this.n * f.d) - (this.d * f.n);
        var d = (this.d * f.d);
        var r = this.EuclidesMCD(n,d);
        d = d/r;
        n = n/r;
        return new Fraction(n,d);
        }
    }
    }
    div(f){
      if (f instanceof Fraction){
        if (this.d === 0 || f.d === 0){
          console.log('No se puede efectuar una división sobre 0');
        } else {
          var n = this.n * f.d;
          var d = this.d * f.n;
          var r = this.EuclidesMCD(n,d);
          d = d/r;
          n = n/r;
          return new Fraction (n,d);
        }
      }
    }
}

var f1= new Fraction(4,2);
var f2= new Fraction(5,4)

console.log(f1.mul(f2));