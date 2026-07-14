/*
const cursos = [
    {
        nombre: "HTML y CSS",
        descripcion: "Aprende a crear paginas web basicas.",
        categoria: "Desarrollo Web",
        duracion: "7 semanas",
        precio: "$155",
        imagen: "./images/logo1.png"
    },
    {
        nombre: "Bootstrap Basico",
        descripcion: "Aprende a utilizar el framework de código abierto Bootstrap.",
        categoria: "Desarrollo Web",
        duracion: "5 semanas",
        precio: "$100",
        imagen: "./images/logo1.1.png"
    },
    {
        nombre: "JavaScript Inicial",
        descripcion: "Inicia con los fundamentos de programacion para transformar paginas estaticas en interactivas.",
        categoria: "Desarrollo Web",
        duracion: "8 semanas",
        precio: "$160",
        imagen: "./images/logotitle.png"
    },
    {
        nombre: "Python Inicial",
        descripcion: "Inicia y aprende programacion desde cero",
        categoria: "Programacion",
        duracion: "10 semanas",
        precio: "$165",
        imagen: "./images/logo1 copida.PNG"
    },
    {
        nombre: "Bases de Datos SQL",
        descripcion: "Aprende a crear tablas y consultas para guardar informacion.",
        categoria: "Datos",
        duracion: "5 semanas",
        precio: "$110",
        imagen: "./images/AdobeColor-Mi tema de color.jpeg"
    },
    {
        nombre: "Seguridad Digital",
        descripcion: "Conoce conceptos basicos para navegar y proteger datos.",
        categoria: "Seguridad",
        duracion: "6 semanas",
        precio: "$125",
        imagen: "./images/logo1.png"
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const formBuscarCursos = document.getElementById("formBuscarCursos");
    const buscarCurso = document.getElementById("buscarCurso");
    const filtroCategoria = document.getElementById("filtroCategoria");

    mostrarCursos(cursos);

    formBuscarCursos.addEventListener("submit", function (event) {
        event.preventDefault();
        filtrarCursos();
    });

    buscarCurso.addEventListener("input", function () {
        filtrarCursos();
    });

    filtroCategoria.addEventListener("change", function () {
        filtrarCursos();
    });
});

function mostrarCursos(listaCursos) {
    const contenedor = document.getElementById("listaCursos");
    const mensaje = document.getElementById("mensajeCursos");

    contenedor.innerHTML = "";
    mensaje.innerText = "";

    if (listaCursos.length == 0) {
        mensaje.innerText = "No se encontraron cursos.";
    }

    listaCursos.map(function (curso) {
        contenedor.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                <article class="curso">
                    <img src="${curso.imagen}" alt="Curso ${curso.nombre}">
                    <h3>${curso.nombre}</h3>
                    <p class="categoria">Categoria: ${curso.categoria}</p>
                    <p>${curso.descripcion}</p>
                    <p>Duracion: ${curso.duracion}</p>
                    <p class="precio">Precio: ${curso.precio}</p>
                </article>
            </div>
        `;
    });
}

function filtrarCursos() {
    const texto = document.getElementById("buscarCurso").value.toLowerCase();
    const categoria = document.getElementById("filtroCategoria").value;

    const cursosFiltrados = cursos.filter(function (curso) {
        const coincideTexto = curso.nombre.toLowerCase().includes(texto) || curso.descripcion.toLowerCase().includes(texto);
        const coincideCategoria = categoria == "Todas" || curso.categoria == categoria;

        return coincideTexto && coincideCategoria;
    });

    mostrarCursos(cursosFiltrados);
}
    */