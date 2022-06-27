function jugar() {
    if (document.getElementById('asknombre').value === "") {
        alert("Ingrese un nombre!");
        document.getElementById('asknombre').value = "";
        return;
    }else location.href = "jugar.html";
}