//ife Class Like object
core= new(class{
    constructor(v=0){
        this._v =v;

    }// Props
    get v(){return this._v}
    set v(v){}
})(3)