// Array de categoria
const categoria = ["Desarrollo Web", "Programacion", "Datos"];

// Creacion de array de tarjetas de cursos
const cursos = [
    {
        nombre: "Desarrollo web",
        descripcion: "Este curso aprenderemos los fundamentos del desarrollo web, con buenas practicas de diseño y programación.",
        imagen: "./images/web.png",
        categoria: categoria[0]
    },
    {
        nombre: "Programación en Python",
        descripcion: "En este curso aprenderás conceptos fundamentales de la programación en Python.",
        imagen: "./images/pyton.png",
        categoria: categoria[1]
    },
    {
        nombre: "Base de Datos SQL",
        descripcion: "En este curso aprenderás conceptos fundamentales en la creacion y gestion de bases de datos MySQL",
        imagen: "./images/mysql.png",
        categoria: categoria[2]
    }
];

// Agregando el evento cuando el documento se cargue
document.addEventListener("DOMContentLoaded", function() {
    let contenedorCursos = document.getElementById("container-cursos");

    mostrarCursosDestacados(cursos, contenedorCursos);
});

// Funcion para agregar las tarjetas
function mostrarCursosDestacados (listaCursos, contenedorPadre) {

    for (let index = 0; index < listaCursos.length; index++) {
        const cursoActual = listaCursos[index];
        
        // Creacion de los elemento html, clases y atributos y contenido
        const article = document.createElement("article");
        article.classList.add("tarjeta", "tarjeta-curso");

        const imagen = document.createElement("img");
        imagen.classList.add("logo-curso");
        imagen.src = cursoActual.imagen;
        imagen.alt = "logo del curso";

        const titulo = document.createElement("h3");
        titulo.classList.add("curso-titulo");
        titulo.textContent = cursoActual.nombre;
        
        const contenedorCategoria = document.createElement("div");
        contenedorCategoria.classList.add("contenedor-categoria");

        const spanTituloCategoria = document.createElement("span");
        spanTituloCategoria.classList.add("titulo-categoria");
        spanTituloCategoria.textContent = "Categoria: "

        const spanTipoCategoria = document.createElement("span");
        spanTipoCategoria.textContent = cursoActual.categoria;

        const parrafoDescripcion = document.createElement("p");
        parrafoDescripcion.classList.add("curso-descripcion")
        parrafoDescripcion.textContent = cursoActual.descripcion;

        const boton = document.createElement("a");
        boton.classList.add("boton", "boton-curso")
        boton.textContent = "Ver Curso"
        boton.href= "";

        // Creacion de la estructura
        contenedorCategoria.appendChild(spanTituloCategoria);
        contenedorCategoria.appendChild(spanTipoCategoria);

        article.appendChild(imagen);
        article.appendChild(titulo);
        article.appendChild(contenedorCategoria);
        article.appendChild(parrafoDescripcion);
        article.appendChild(boton);

        contenedorPadre.appendChild(article);
    }
}