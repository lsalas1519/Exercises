class line{
    constructor(p1,p2){
        //evaluate
        this._p1=p1;
        this._p2=p2;

    };
    draw(){console.log('draw line');};////
    clone(){};
    get p1(){return this._p1;}
    set p1(x){this._p1=p1};
    get p2(){return this ._p2;}
    set p2(x){this._p2=p2}
}