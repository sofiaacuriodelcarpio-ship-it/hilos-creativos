
/* =====================================
   GENERADOR DE IDEAS - HILOS CREATIVOS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    // ELEMENTOS DEL HTML
    const boton = document.getElementById("generar-idea");
    const imagen = document.getElementById("imagen-idea");
    const nombre = document.getElementById("nombre-idea");
    const animalTexto = document.getElementById("animal-idea");
    const colorTexto = document.getElementById("color-idea");
    const accesorioTexto = document.getElementById("accesorio-idea");

    // ANIMALES Y COLORES DISPONIBLES
    const animales = [
        {
            nombre: "Camarón",
            archivo: "cama",
            colores: ["crema", "durazno", "lila", "rosa"]
        },
        {
            nombre: "Capibara",
            archivo: "capi",
            colores: ["beige", "cafe", "crema", "rosa"]
        },
        {
            nombre: "Pulpito",
            archivo: "pulpo",
            colores: ["azul", "lila", "menta", "rosa"]
        },
        {
            nombre: "Tortuguita",
            archivo: "tortu",
            colores: ["celeste", "lila", "rosa", "verde"]
        }
    ];

    // ACCESORIOS
    const accesorios = [
        { nombre: "Moño 🎀", archivo: "moño" },
        { nombre: "Corazón 💗", archivo: "corazon" },
        { nombre: "Flor 🌸", archivo: "flor" },
        { nombre: "Sin accesorio", archivo: "" }
    ];

    // NOMBRES BONITOS
    const nombresIdeas = [
        "¡Tu próxima creación! ♡",
        "¡Un amiguito adorable! 🎀",
        "¡Una pequeña ternura! 💗",
        "¡Tu nuevo compañero! 🧶",
        "¡Una idea llena de amor! 🌸"
    ];

    // ELEGIR AL AZAR
    function aleatorio(lista) {
        const posicion = Math.floor(Math.random() * lista.length);
        return lista[posicion];
    }

    // GENERAR PELUCHE
    function generarIdea() {

        const animal = aleatorio(animales);
        const color = aleatorio(animal.colores);
        const accesorio = aleatorio(accesorios);
        const nombreIdea = aleatorio(nombresIdeas);

        // CREAR EL NOMBRE DEL ARCHIVO
        let archivoImagen;

        if (accesorio.archivo === "") {
            archivoImagen = animal.archivo + " " + color + ".png";
        } else {
            archivoImagen = animal.archivo + " " + color +
                " " + accesorio.archivo + ".png";
        }

        // MOSTRAR IMAGEN
        imagen.src = "../ideas/" + archivoImagen;

        // MOSTRAR INFORMACIÓN
        nombre.textContent = nombreIdea;
        animalTexto.textContent = "Animal: " + animal.nombre;
        colorTexto.textContent = "Color: " + color;
        accesorioTexto.textContent = "Accesorio: " + accesorio.nombre;

        // ANIMACIÓN
        imagen.classList.remove("animacion-idea");

        void imagen.offsetWidth;

        imagen.classList.add("animacion-idea");
    }

    // ACTIVAR BOTÓN
    boton.addEventListener("click", generarIdea);

});
