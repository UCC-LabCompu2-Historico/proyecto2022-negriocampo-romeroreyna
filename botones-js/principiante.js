function comojugar() {
    if (document.getElementById('asknombre').value === "") {
        alert("Ingrese un nombre!");
        document.getElementById('asknombre').value = "";
    }else location.href = "comojugar.html";
}