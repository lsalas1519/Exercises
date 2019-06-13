var C = 0;
var K = 0;

function Celsius_Kelvin() {

    C = parseFloat(document.getElementById("cantidad").value);

    K=C+273;

    Mensaje = (K);
    
    document.getElementById('resultado').value=Mensaje;

    } 

    function Kelvin_Celsius() {

    K = parseFloat(document.getElementById("cantidad1").value);

    C=K-273;

    Mensaje = (C);

    document.getElementById('resultado1').value=Mensaje;

    } 

    function Dolar_Euro() {

    D = parseFloat(document.getElementById("Dolares1").value);

    E=D*0.89;  

    Mensaje = (E);

    document.getElementById('Euros1').value=Mensaje;

  } 
  
  function Euro_Dolar() {

  E = parseFloat(document.getElementById("Euros").value);

  D=E*1.12;  

  Mensaje = (D);

  document.getElementById('Dolares').value=Mensaje;

  } 
  
  function Km_Mll() {

    K= parseFloat(document.getElementById("Kilometros").value);
  
    M=K/1.609;  
  
    Mensaje = (M);
  
    document.getElementById('Millas').value=Mensaje;
  
    } 
    

    function Mll_Km() {

        M= parseFloat(document.getElementById("Millas1").value);
      
        K=M*1.609;  
      
        Mensaje = (K);
      
        document.getElementById('Kilometros1').value=Mensaje;
      
        } 


        function Galon_Litro() {

            Galon= parseFloat(document.getElementById("Galones").value);
            
            Litro=Galon*3.785;  
          
            Mensaje = (Litro);
          
            document.getElementById('Litros').value=Mensaje;
          
            } 

            function Litro_Galon() {

                Litro= parseFloat(document.getElementById("Litros1").value);
            
                Galon=Litro/3.785;  
              
                Mensaje = (Galon);
              
                document.getElementById('Galomes1').value=Mensaje;
                } 
        // (rad*180)/Math.pi
        
        function Rad_Grad() {

            rad= parseFloat(document.getElementById("Radianes").value);
        
            grad=(rad*180)/Math.PI;  
          
            Mensaje = (grad);
          
            document.getElementById('gRADOS').value=Mensaje;
            } 

            function Grad_Rad() {

                grad= parseFloat(document.getElementById("gRADOS1").value);
            
                rad=(grad*Math.PI)/180;  
              
                Mensaje = (rad);
              
                document.getElementById('Radianes1').value=Mensaje;
                } 