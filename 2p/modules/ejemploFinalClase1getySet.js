class Line{
    constructor(p1,p2){
        //validar aqui
        this._p1=p1;
        this._p2=p2;
        // el guión bajo es importante para el metodo get y set bc de otro modo se generarìa una llamada recursiva y ahì si se 
        //detendría
        // ámbito 
    }




}



//ejemplo con vector
// directorio con stats queremos decir que ws una case que tiene métodos relacionados con estádistica
class vector{
    constructor(A){
        //validar si es arreglo
        this._A=A;

    }//propiedades
    getData(){return this._A}
    //_TASK
    sum(){

    }
    max(){}
    min(){}
    avg(){}
    inicialize(a,v){}
    vectorize(a,b,k){}
}//añadir más, es muy importante la palabra reservada new ya que de acuerdo a nuestra definición 
// para llemar el get data ponemos solo el nombre del vector 'v1'
// en este ejeemplo e guión bajo es opcional.



