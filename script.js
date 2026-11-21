console.log("¡JavaScript está conectado!");


// =====================================
// BOTÓN DE SALUDAR
// =====================================

const boton = document.getElementById("saludar");
const mensaje = document.getElementById("mensaje");

if (boton && mensaje) {
    boton.addEventListener("click", function() {

        if (mensaje.textContent === "") {
            mensaje.textContent = "¡Holaaaa! 🐸💕 Bienvenid@ a Hilos Creativos. ¡Qué alegría verte!";
        } else {
            mensaje.textContent = "";
        }

    });
}


// =====================================
// CREADOR DE PELUCHES
// =====================================

const tipo = document.getElementById("tipo");
const imagen = document.getElementById("imagen-peluche");
const colores = document.querySelectorAll(".color");

let colorSeleccionado = "crema";

const animales = {
    gatito: "gato",
    ranita: "rana",
    conejito: "conejo",
    osito: "oso"
};


// =====================================
// CAMBIAR IMAGEN
// =====================================

function cambiarPeluche() {

    if (!tipo || !imagen) return;

    const animal = animales[tipo.value];

    if (!animal) {
        console.error("No se reconoce el animal:", tipo.value);
        return;
    }

    const carpeta = imagen.dataset.carpeta;

    const ruta = carpeta + animal + "_" + colorSeleccionado + ".png";

    console.log("Cargando imagen:", ruta);

    imagen.src = ruta;

    imagen.onerror = function() {
        console.error("No se pudo encontrar:", ruta);
    };

}


// =====================================
// CAMBIAR ANIMAL
// =====================================

if (tipo) {
    tipo.addEventListener("change", cambiarPeluche);
}


// =====================================
// CAMBIAR COLOR
// =====================================

colores.forEach(function(botonColor) {

    botonColor.addEventListener("click", function() {

        colorSeleccionado = botonColor.dataset.color;

        cambiarPeluche();

    });

});


// =====================================
// IMAGEN INICIAL
// =====================================

cambiarPeluche();



console.log("Animal:", tipo.value);
console.log("Color:", colorSeleccionado);
console.log("Carpeta:", imagen.dataset.carpeta);




// BOTON DE WHATSAPP

const botonWhatsapp = document.getElementById("boton-whatsapp");
const numeroWhatsapp = document.getElementById("numero-whatsapp");

if (botonWhatsapp && numeroWhatsapp) {

    botonWhatsapp.addEventListener("click", function() {

        numeroWhatsapp.textContent = "📱 +51 957 049 100";

        numeroWhatsapp.hidden = !numeroWhatsapp.hidden;

    });

}