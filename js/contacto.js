// Obtener elementos del DOM

const formulario = document.getElementById("formContacto");

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

const btnEnviar = document.getElementById("btnEnviar");

const errorNombre = document.getElementById("errorNombre");
const errorEmail = document.getElementById("errorEmail");
const errorTelefono = document.getElementById("errorTelefono");
const errorAsunto = document.getElementById("errorAsunto");
const errorMensaje = document.getElementById("errorMensaje");

const mensajeExito = document.getElementById("mensajeExito");


// Validar nombre

function validarNombre() {

    const valor = nombre.value.trim();

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (valor.length < 5) {

        errorNombre.textContent =
            "Debe contener al menos 5 caracteres";

        nombre.classList.add("input-invalido");
        nombre.classList.remove("input-valido");

        return false;
    }

    if (!regex.test(valor)) {

        errorNombre.textContent =
            "Solo se permiten letras y espacios";

        nombre.classList.add("input-invalido");
        nombre.classList.remove("input-valido");

        return false;
    }

    errorNombre.textContent = "";

    nombre.classList.remove("input-invalido");
    nombre.classList.add("input-valido");

    return true;
}


// Validar correo

function validarEmail() {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email.value.trim())) {

        errorEmail.textContent =
            "Ingrese un correo válido";

        email.classList.add("input-invalido");
        email.classList.remove("input-valido");

        return false;
    }

    errorEmail.textContent = "";

    email.classList.remove("input-invalido");
    email.classList.add("input-valido");

    return true;
}


// Validar teléfono

function validarTelefono() {

    const valor = telefono.value.trim();

    const regex = /^\d+$/;

    if (!regex.test(valor)) {

        errorTelefono.textContent =
            "Solo se permiten números";

        telefono.classList.add("input-invalido");
        telefono.classList.remove("input-valido");

        return false;
    }

    if (valor.length < 8) {

        errorTelefono.textContent =
            "Debe tener al menos 8 dígitos";

        telefono.classList.add("input-invalido");
        telefono.classList.remove("input-valido");

        return false;
    }

    errorTelefono.textContent = "";

    telefono.classList.remove("input-invalido");
    telefono.classList.add("input-valido");

    return true;
}


// Validar asunto

function validarAsunto() {

    if (asunto.value.trim().length < 3) {

        errorAsunto.textContent =
            "Debe contener al menos 3 caracteres";

        asunto.classList.add("input-invalido");
        asunto.classList.remove("input-valido");

        return false;
    }

    errorAsunto.textContent = "";

    asunto.classList.remove("input-invalido");
    asunto.classList.add("input-valido");

    return true;
}


// Validar mensaje

function validarMensaje() {

    if (mensaje.value.trim().length < 20) {

        errorMensaje.textContent =
            "Debe contener al menos 20 caracteres";

        mensaje.classList.add("input-invalido");
        mensaje.classList.remove("input-valido");

        return false;
    }

    errorMensaje.textContent = "";

    mensaje.classList.remove("input-invalido");
    mensaje.classList.add("input-valido");

    return true;
}


// Verificar todo el formulario

function verificarFormulario() {

    const formularioValido =
        validarNombre() &&
        validarEmail() &&
        validarTelefono() &&
        validarAsunto() &&
        validarMensaje();

    btnEnviar.disabled = !formularioValido;
}


// Eventos en tiempo real

nombre.addEventListener("input", verificarFormulario);

email.addEventListener("input", verificarFormulario);

telefono.addEventListener("input", verificarFormulario);

asunto.addEventListener("input", verificarFormulario);

mensaje.addEventListener("input", verificarFormulario);


// Envío

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    mensajeExito.textContent =
        "Formulario enviado correctamente.";

    formulario.reset();

    btnEnviar.disabled = true;

    document
        .querySelectorAll(".input-valido")
        .forEach(input => {
            input.classList.remove("input-valido");
        });
});