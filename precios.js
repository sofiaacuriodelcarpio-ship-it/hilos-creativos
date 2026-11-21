
/* =====================================
   PRECIOS - hilos creativos
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTOS HTML
    const tipo = document.getElementById("tipo");
    const tamano = document.getElementById("tamano");
    const accesorios = document.getElementById("accesorios");

    const precioBase = document.getElementById("precio-base");
    const precioAccesorio = document.getElementById("precio-accesorio");
    const precioTotal = document.getElementById("precio-total");

    // PRECIOS DE LOS ANIMALES
    const preciosAnimales = {

        conejito: {
            pequeno: 14,
            mediano: 20,
            grande: 30
        },

        gatito: {
            pequeno: 12,
            mediano: 18,
            grande: 28
        },

        osito: {
            pequeno: 11,
            mediano: 17,
            grande: 27
        },

        ranita: {
            pequeno: 9,
            mediano: 15,
            grande: 25
        }

    };

    // PRECIOS DE LOS ACCESORIOS
    const preciosAccesorios = {

        moño: 2,
        flor: 3,
        corazon: 3,
        ninguno: 0

    };

    // DETECTAR EL TAMAÑO
    function obtenerTamano() {

        const texto = tamano.value ||
            tamano.options[tamano.selectedIndex].text;

        if (texto.includes("Pequeño") || texto.includes("7")) {
            return "pequeno";
        }

        if (texto.includes("Mediano") || texto.includes("12")) {
            return "mediano";
        }

        if (texto.includes("Grande") || texto.includes("18")) {
            return "grande";
        }

        return "pequeno";
    }


    // ACTUALIZAR LOS PRECIOS
    function actualizarPrecio() {

        const animal = tipo.value;
        const medida = obtenerTamano();
        const accesorio = accesorios.value;

        const base = preciosAnimales[animal][medida];
        const extra = preciosAccesorios[accesorio];

        const total = base + extra;

        // MOSTRAR PRECIOS EN HTML
        precioBase.textContent = "S/ " + base;
        precioAccesorio.textContent = "S/ " + extra;
        precioTotal.textContent = "S/ " + total;

    }

    // ESCUCHAR CAMBIOS
    tipo.addEventListener("change", actualizarPrecio);
    tamano.addEventListener("change", actualizarPrecio);
    accesorios.addEventListener("change", actualizarPrecio);






    // PRECIO INICIAL
actualizarPrecio();


// =====================================
// HACER PEDIDO POR WHATSAPP
// =====================================

const botonPedido = document.getElementById("hacer-pedido");

// Guardar el último color seleccionado
let colorPedido = null;

const botonesColores = document.querySelectorAll(
    ".colores-peluche .color"
);

botonesColores.forEach(function (boton) {

    boton.addEventListener("click", function () {
        colorPedido = boton.dataset.color;
    });

});

if (botonPedido) {

    botonPedido.addEventListener("click", function () {

        // NÚMERO DE WHATSAPP
        const telefono = "51XXXXXXXXX";

        // DATOS DEL PELUCHE
        const animal = tipo.options[tipo.selectedIndex].text;
        const medida = tamano.options[tamano.selectedIndex].text;
        const accesorio = accesorios.options[accesorios.selectedIndex].text;

        // COLOR
        const color = colorPedido || "Crema";

        // PRECIO FINAL
        actualizarPrecio();
        const total = precioTotal.textContent;

        // MENSAJE AUTOMÁTICO
        const mensaje =
            `¡Hola! 💗 Quiero hacer un pedido en Hilos Creativos.\n\n` +
            `🧸 Peluche: ${animal}\n` +
            `🎨 Color: ${color}\n` +
            `📏 Tamaño: ${medida}\n` +
            `🌸 Accesorio: ${accesorio}\n` +
            `💰 Precio total: ${total}\n\n` +
            `¿Podrían confirmarme la disponibilidad? 🧶`;

        // ABRIR WHATSAPP
        const enlace =
            `https://wa.me/${51957049100}?text=${encodeURIComponent(mensaje)}`;

        window.open(enlace, "_blank", "noopener,noreferrer");

    });

}

});