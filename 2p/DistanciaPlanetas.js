var mercurio= {
    distancia:36
};

var venus= {
    distancia:67
};

var tierra= {
    distancia:93
};

var marte= {
    distancia:141
};

var jupiter= {
    distancia:483
};

var saturno= {
    distancia:886
};

var urano= {
    distancia:1782
};

var neptuno= {
    distancia:2793
};

var pluton= {
    distancia:3670
};

function   DistanciaP1P2(p1,p2){
    var resultado= Math.abs(p1.distancia-p2.distancia);
    return(resultado+" Millones de millas");
}
DistanciaP1P2(tierra,marte);