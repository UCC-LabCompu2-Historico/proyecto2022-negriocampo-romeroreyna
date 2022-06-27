function comojugar() {

    if (document.getElementById('asknombre').value === "") {
        alert("Ingrese un nombre!");
        document.getElementById('asknombre').value = "";
        return;
    }else location.href = "comojugar.html";
}