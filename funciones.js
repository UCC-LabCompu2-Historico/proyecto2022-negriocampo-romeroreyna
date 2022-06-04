 // /**
 //  * Descripción
 //  * @method Nombre de la función
 //  * @param Parametro A
 //  * @param Parametro B
 //  * @return Valor que retorna
 //  * */

 function checkang(){
    if(document.getElementById("angulo").value<0){
        alert('Angulo incorrecto. Recuerde que el angulo debe ser mayor a 0° para que el tiro sea valido!');
        document.getElementById('angulo').value = "";
    }else if (document.getElementById("angulo").value>90){
        alert('Angulo incorrecto. Recuerde que el angulo debe ser menor a 90° para que el tiro sea valido!');
        document.getElementById('angulo').value = "";
    }
 }

 function checkvel(){
    let ms;
     if(document.getElementById("unidad").value === "ms"){
         ms = true;
     }else if (document.getElementById("unidad").value === "km"){
         ms = false;
     }
     return ms;
 }

 function dibujo() {
     var canvas = document.getElementById("canvastiro");
     var ctx = canvas.getContext("2d");
     var v=document.getElementById('velocidad').value;
     var x=0;
     var a = document.getElementById('angulo').value;
     var g = 9.8;
     var AM, ALM;

     if(!checkvel){
         v = (document.getElementById("velocidad").value)/3.6;
     }

     AM = (Math.pow(v,2)*Math.sqrt(sin(a),2))/g;
     ALM = (Math.pow(v,2)*sin(2*a))/g;



 }

 function tiro(){
    checkang();
    checkvel();
    dibujo();
 }


