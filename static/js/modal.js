// Obtener la modal
const modal = document.getElementById("modal");

// Obtener todos los botones que abren la modal
const btns = document.querySelectorAll(".boton");

// Obtener el elemento <span> que cierra la modal
var span = document.getElementsByClassName("cerrarModal")[0];

// Obtener el elemento <iframe> donde se mostrará el video
const iframe = document.getElementById("video");

// Cuando el usuario haga clic en un botón, abre la modal y muestra el video correspondiente
btns.forEach(function (btn) {
    btn.onclick = function () {
        modal.classList.add('fade-in');
        modal.classList.remove('fade-out');
        modal.style.display = "block";
        iframe.src = this.getAttribute("video");
    }
});

// Cuando el usuario haga clic en <span> (x), cierra la modal y detiene el video
span.onclick = function () {
    modal.classList.add('fade-out');
    setTimeout(function () {
        modal.style.display = "none";
        iframe.src = "";
        modal.classList.remove('fade-in');
        modal.classList.remove('fade-out');
    }, 500);
}

// Cuando el usuario haga clic en cualquier lugar fuera de la modal, la cierra y detiene el video
window.onclick = function (event) {
    if (event.target == modal) {
        span.click();
    }
}