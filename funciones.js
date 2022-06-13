/**
 * Calculo de alcance y distancia maxima en un tiro oblicuo.
 * @method resolver
 * @param {number} velinicial - valor de la velocidad con la que empieza el cuerpo
 * @param {number} angulo - angulo con el que se realiza el tiro
 * @return
 */
function resolver(velinicial, angulo){
    if (document.getElementById('velocidad').value === "") {
        alert("Ingrese una velocidad valida!");
        document.getElementById('velocidad').value = "";
        return;
    }
    if (document.getElementById('angulo').value === "") {
        alert("Ingrese un angulo valido!");
        document.getElementById('angulo').value = "";
        return;
    }
    if (document.getElementById('velocidad').value <= 0) {
        alert("La velocidad no puede ser negativa o igual a cero!");
        document.getElementById('velocidad').value = "";
        return;
    }
    if ((document.getElementById('angulo').value <= 0) || (document.getElementById('angulo').value >= 91)) {
        alert("El ángulo no pueden ser negativo, igual a cero o mayor a 90!");
        document.getElementById('angulo').value = "";
        return;
    }

    let alcance, altura;

    if(isNaN(velinicial) || isNaN(angulo)) {
        document.getElementById("velociad").value="";
        document.getElementById("angulo").value="";
        alert("Los datos deben ser numericos.");
        return;
    }
    
    Number(velinicial);
    Number(angulo);

    document.getElementsByName("alturamaxima")[0].innerHTML = (Math.pow(velinicial,2)*Math.pow(Math.sin((angulo*Math.PI)/180), 2))/(2*9.8);
    document.getElementsByName("alcancemaximo")[0].innerHTML = Math.pow(velinicial, 2)*Math.sin(2*(angulo*Math.PI)/180)/9.8;

    alcance=Number(document.getElementsByName("alcancemaximo")[0].value);
    altura=Number(document.getElementsByName("alturamaxima")[0].value);

    graficar(alcance, altura);
}


/**
 * Creacion de los ejes X e Y.
 * @method ejes
 * @return
 */

function ejes(){
    let canvas=document.getElementById("canvas1");
    let ctx=canvas.getContext("2d");
    let altMax = canvas.height;
    let anchoMax = canvas.width;
    let margX = 50;
    let margY = 30;
    let valorX=20;
    let valorY=20;
    let i;

    //Eje X
    ctx.beginPath();
    ctx.moveTo(margX , altMax - margY);
    ctx.lineTo(anchoMax -margX,altMax - margY);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(margX , altMax - margY);
    ctx.lineTo(margX,margY);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Flecha Eje X
    ctx.beginPath();
    ctx.moveTo(anchoMax - margX, altMax - margY);
    ctx.lineTo(anchoMax - margX - 15, altMax - margY - 5);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(anchoMax - margX, altMax - margY);
    ctx.lineTo(anchoMax - margX - 15, altMax - margY + 5);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //Flecha Eje Y
    ctx.beginPath();
    ctx.moveTo(margX , margY);
    ctx.lineTo(margX + 5 , margY + 15);
    ctx.stroke();
    ctx.closePath();


    ctx.beginPath();
    ctx.moveTo(margX , margY);
    ctx.lineTo(margX -5 , margY + 15);
    ctx.strokestyle = "#000000";
    ctx.stroke();
    ctx.closePath();

    //divisiones X
    ctx.beginPath();
    for(i = margX + 40 ; i < anchoMax - margY - 40; i += 40){
        ctx.moveTo(i , altMax + 7 - margY );
        ctx.lineTo(i , altMax - margY - 7 );
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    //numeros X
    ctx.beginPath();
    for(i = margX + 40 ; i < anchoMax - margY - 40; i += 40){
        ctx.font = "15px Arial";
        ctx.fillText(valorX , i , altMax  - 10);
        valorX+=20;
    }
    ctx.closePath();

    //divisiones Y
    ctx.beginPath();
    for( i = altMax - margY - 40; i > margY; i -= 40){
        ctx.moveTo(margX - 7 , i);
        ctx.lineTo(margX + 7 , i);
        ctx.strokeStyle = "#000000";
        ctx.stroke();
    }
    ctx.closePath();

    //Numeros Y
    ctx.beginPath();
    for( i = altMax - margY - 40; i > margY; i -= 40){
        ctx.font = "15px Arial";
        ctx.fillText(valorY , margX - 33 , i);
        valorY+=20;
    }
    ctx.closePath();


}

/**
 * Grafico.
 * @method graficar
 * @param {number} alcance - distancia maxima del tiro en el eje X
 * @param {number} altura - distancia maxima del tiro en el eje Y
 * @return
 */
function graficar(alcance , altura) {
    let canvas = document.getElementById("canvas1");
    let ctx = canvas.getContext("2d");
    let altMax = canvas.height;
    // let anchoMax = canvas.width;
    let margX = 50;
    let margY = 30;
    alcance *= 2;
    altura *= 2;
    console.log(alcance, altura);

    ctx.beginPath();
    ctx.moveTo(margX, altMax - margY);
    ctx.quadraticCurveTo((alcance / 2) + margX, altMax - margY - altura * 2, alcance + margX, altMax - margY);
    ctx.strokeStyle = "#2a54fd";
    ctx.lineWidth = 4;
    ctx.stroke();
    ctx.closePath();
}

/**
 * Borra el contenido del grafico y de los input
 * @method limpiar
 * @return
 */
function limpiar(){
    let canvas1 = document.getElementById("canvas1");
    let ctx = canvas1.getContext("2d");

    canvas1.width = canvas1.width;

    ejes();

    document.getElementById('angulo').value = "";
    document.getElementById('velocidad').value = "";
}

