const profesores = [
    {
        nombre: "Carlos Ramírez",
        especialidad: "Desarrollo Web",
        descripcion: "Especialista en HTML, CSS, JavaScript y Bootstrap con amplia experiencia en proyectos web.",
        foto: "./images/profesor4.jpg",
        correo: "carlos.ramirez@novacore.com",
        cursosQueImparte: "HTML5, CSS3, JavaScript y Bootstrap"
    },
    {
        nombre: "María González",
        especialidad: "Python",
        descripcion: "Experta en programación con Python, automatización de procesos y análisis de datos.",
        foto: "./images/profesor2.jpg",
        correo: "maria.gonzalez@novacore.com",
        cursosQueImparte: "Python Básico, Python Avanzado y Análisis de Datos"
    },
    {
        nombre: "Andrés Vargas",
        especialidad: "Bases de Datos",
        descripcion: "Consultor en MySQL y PostgreSQL con experiencia en diseño y administración de bases de datos.",
        foto: "./images/profesor3.jpg",
        correo: "andres.vargas@novacore.com",
        cursosQueImparte: "MySQL, PostgreSQL y Diseño de Bases de Datos"
    },
    {
        nombre: "Laura Fernández",
        especialidad: "Ciberseguridad",
        descripcion: "Especialista en protección de datos, redes y buenas prácticas de seguridad informática.",
        foto: "./images/profesor1.jpg",
        correo: "laura.fernandez@novacore.com",
        cursosQueImparte: "Seguridad Informática, Redes y Protección de Datos"
    }
];

const contenedorProfesores = document.getElementById("contenedorProfesores");

function mostrarProfesores() {
    profesores.forEach((profesor, index) => {
        const columna = document.createElement("div");
        columna.className = "col-md-6 col-lg-3 mb-4";

        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta h-100 text-center";
        tarjeta.style.cursor = "pointer";
        tarjeta.setAttribute("data-id", index);

        const imagen = document.createElement("img");
        imagen.src = profesor.foto;
        imagen.alt = profesor.nombre;
        imagen.className = "img-fluid rounded mb-3 w-100";
        imagen.style.height = "130px";
        imagen.style.objectFit = "cover";

        const nombre = document.createElement("h3");
        nombre.style.color = "white";
        nombre.textContent = profesor.nombre;

        const especialidad = document.createElement("p");
        especialidad.style.color = "#05F2DB";
        especialidad.textContent = profesor.especialidad;

        const descripcion = document.createElement("p");
        descripcion.style.color = "white";
        descripcion.textContent = profesor.descripcion;

        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(especialidad);
        tarjeta.appendChild(descripcion);

        tarjeta.addEventListener("click", function () {
            abrirModal(index);
        });

        columna.appendChild(tarjeta);
        contenedorProfesores.appendChild(columna);
    });
}

function abrirModal(index) {
    const profesor = profesores[index];

    document.getElementById("modalNombre").textContent = profesor.nombre;
    document.getElementById("modalFoto").src = profesor.foto;
    document.getElementById("modalFoto").alt = profesor.nombre;
    document.getElementById("modalEspecialidad").textContent = "Especialidad: " + profesor.especialidad;
    document.getElementById("modalDescripcion").textContent = profesor.descripcion;
    document.getElementById("modalCorreo").textContent = "Correo: " + profesor.correo;
    document.getElementById("modalCursos").textContent = "Cursos que imparte: " + profesor.cursosQueImparte;

    const modalProfesor = new bootstrap.Modal(document.getElementById("modalProfesor"));
    modalProfesor.show();
}

mostrarProfesores();