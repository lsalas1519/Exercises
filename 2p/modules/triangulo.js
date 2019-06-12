class triangulo   {
    constructor(p1,p2,p3){
        //evaluate
        this._p1=p1;
        this._p2=p2;
        this._p3=p3;
        

    };
    draw(){console.log('draw line');};////
    clone(){
      return new triangulo (this._or)
    };
    get p1(){return this._p1;}
    set p1(x){this._p1=p1};
    get p2(){return this ._p2;}
    set p2(x){this._p2=p2}
    get p3(){return this._p3;}
    set p3(x){this._p3=p3};
}