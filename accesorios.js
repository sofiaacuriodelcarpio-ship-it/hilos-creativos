
/* =====================================
   ACCESORIOS - hilos creativos
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    const tipo = document.getElementById("tipo");
    const accesorios = document.getElementById("accesorios");
    const imagen = document.getElementById("imagen-peluche");
    const colores = document.querySelectorAll(".color");

    if (!tipo || !accesorios || !imagen) {
        console.log("No se encontraron los elementos del creador.");
        return;
    }

    // Nombres de los animales en tus archivos
    const animales = {
        ranita: "rana",
        gatito: "gato",
        conejito: "conejo",
        osito: "oso"
    };

    // Color seleccionado
    let colorActual = "crema";

    // Detectar el color inicial
    colores.forEach(boton => {
        if (
            boton.classList.contains("activo") ||
            boton.classList.contains("seleccionado")
        ) {
            colorActual = boton.dataset.color;
        }
    });

    // Cambiar imagen según animal, color y accesorio
    function actualizarAccesorio() {

        const animal = animales[tipo.value];
        const color = colorActual;
        const accesorio = accesorios.value;

        if (!animal || !color) return;

        // Si no hay accesorio, conservar la imagen original
        if (accesorio === "ninguno") {
            return;
        }

        // Nombre exacto de tu archivo
        const nombreImagen =
    `${animal} ${color} ${accesorio}.png`.normalize("NFD");

        // Ruta desde pages/crear.html
        imagen.src = `../accesorios/${nombreImagen}`;

        imagen.onerror = () => {
            console.error("No se encontró la imagen:", nombreImagen);
        };
    }

    // Cambiar al seleccionar un accesorio
    accesorios.addEventListener("change", actualizarAccesorio);

    // Cambiar al seleccionar otro animal
    tipo.addEventListener("change", actualizarAccesorio);

    // Cambiar al seleccionar otro color
    colores.forEach(boton => {

        boton.addEventListener("click", () => {

            colorActual = boton.dataset.color;

            actualizarAccesorio();

        });

    });

});
