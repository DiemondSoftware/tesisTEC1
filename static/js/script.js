

/* Este código añade escuchas de eventos a dos botones, "realizarTest" y "verOrientaciones". 
Cuando se hace clic en el botón "realizarTest", el código desplaza la página hasta el elemento 
con el id "seccion2". Cuando se hace clic en el botón "verOrientaciones", el código desplaza la
página hasta el elemento con el id "seccion3". */

const btn_realizar_test = document.getElementById('realizarTest');
const btn_ver_orientaciones = document.getElementById('verOrientaciones');

btn_realizar_test.addEventListener("click", () => {
    document.querySelector('#seccion2').scrollIntoView({ behavior: 'smooth' });
});
btn_ver_orientaciones.addEventListener("click", () => {
    document.querySelector('#mostrarTarjetas').scrollIntoView({ behavior: 'smooth' });
});


/* Este código agrega o elimina la clase .visible a los elementos con las 
clases .item y .separador-texto dependiendo de si están visibles en el viewport 
cuando el usuario desplaza la página. De esta manera, se da el efecto de aparición
por desplazamiento en x SÓLO CUANDO SE MUESTRA ESA SECCIÓN EN LA PÁGINA */

window.addEventListener('scroll', function () {
    const items = document.querySelectorAll('.item');
    const separador = document.querySelectorAll('.separador-texto');
    const resolucionPantalla = window.innerHeight;

    items.forEach(function (elemento) {
        if (elemento.getBoundingClientRect().top < resolucionPantalla) {
            elemento.classList.add('visible');
        } else {
            elemento.classList.remove('visible');
        }
    });
    separador.forEach(function (elemento) {
        if (elemento.getBoundingClientRect().top < resolucionPantalla) {
            elemento.classList.add('visible');
        } else {
            elemento.classList.remove('visible');
        }
    });
})