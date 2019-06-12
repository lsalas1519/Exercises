class cuadrado{
    constructor(p1,p2,p3,p4){
        //evaluate
        this._p1=p1;
        this._p2=p2;
        this._p3=p3;
        this._p4=p4;

    };
    draw(){console.log('draw line');};////
    clone(){};
    get p1(){return this._p1;}
    set p1(x){this._p1=p1};
    get p2(){return this ._p2;}
    set p2(x){this._p2=p2}
    get p3(){return this._p3;}
    set p3(x){this._p3=p3};
    get p4(){return this ._p4;}
    set p4(x){this._p4=p4}
}
