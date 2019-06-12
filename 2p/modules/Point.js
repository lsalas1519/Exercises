class Point{
    constructor(x,y){
        if((typeof x =='undefined')&&(typeof y== 'undefined')){
            this.x=0;
            this.y=0;
        }
       else{
        this.x=x;
        this.y=y;
       }
    };
    toString(){return "("+this.x+","+this.y+")";};
    clone(){return new Point(this.x,this.y);};
    distancia(p1,p2){
        var x1=p2.x-p1.x
        var y1=p2.y-p1.y
        var d=Math.sqrt((x1*x1)+(y1*y1))
        return(d)
        }

}
 //p1=new Point(3,4);
//p2= new Point(0,0);
//origen=new Point();
//console.log(p1.distancia);

