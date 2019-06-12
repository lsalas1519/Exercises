class Fecha{
    constructor(dia,mes, anio ){
        if(typeof dia=='number'|| typeof mes == 'number'|| typeof anio == 'number'){
            this._dia= dia;
            this._mes=mes;
            this._anio=anio;
           
        }else {
            console.log('Has ingresado un formato de fecha erroneo')
             
         }
    }
    unDiaMas(){
        if((this._dia != 31) && (this._mes !=12) ){
            this._dia ++;

        } else if((this._dia>=31)&&(this._mes<12)){
            this._dia=1;
            this._mes++;
        }else if((this._mes>=12)&&(this.dia>=31)){
            this.anio++;
            this._dia=1;
            this._mes=1
        
        }
    }

    get dia(){return this._dia}
    set dia(a){this._dia =a}

    get mes(){return this._mes}
    set mes(a){this._mes =a}

    get anio(){return this._anio}
    set anio(a){this._anio =a}
}
