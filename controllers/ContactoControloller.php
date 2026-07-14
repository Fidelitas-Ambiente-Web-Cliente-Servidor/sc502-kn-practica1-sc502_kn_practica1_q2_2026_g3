<?php

require_once __DIR__ . '/../models/ContactoModel.php';

class ContactoControlller
{
private ContactoModel $modelo;

public function_construct()
{
    $this->modelo = new ContactoModel();

}

public function index(): void
{
    if (session_status()===PHP_SESSION){
        session_start();
    }

    $errores = $_SESSION['errores'] ?? [];
    $exito = $_SESSION['exito'] ?? false;
    $old_status = $_SESSION[''] ??;
    unset($_SESSION['errores'], $_SESSION['exito'], $_SESSION['old']);

    require __DIR__ . '/../views/contacto/index.php';
}

public function store(): void
{
    if (session_status()===PHP_SESSION_NONE)
        {
        session_start();
    }

    $nombre = trim ($_POST['nombre'] ?? '');
    $email = trim ($_POST['email'] ?? '');
    $telefono = trim ($_POST['telefono'] ?? '');
    $asunto = trim ($_POST['asunto'] ?? '');
    $mensaje = trim ($_POST['mensaje'] ?? '');

    $errores = [];
    
    if($nombre === '') {
        $errores['nombre'] = 'El nombre es obligatorio.';
    }
   if($email === '') {
        $errores['email'] = 'El email es obligatorio.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errores['email'] = 'El email no es válido.';
    }
    if($telefono === '') {
        $errores['telefono'] = 'El teléfono es obligatorio.';
    }
    if($asunto === '') {
        $errores['asunto'] = 'El asunto es obligatorio.';
    }
    if($mensaje === '') {
        $errores['mensaje'] = 'El mensaje es obligatorio.';
    }

    if (!empty($errores)) {
        $_SESSION['errores'] = $errores;
        $_SESSION['old'] = [
            'nombre' => $nombre,
            'email' => $email,
            'telefono' => $telefono,
            'asunto' => $asunto,
            'mensaje' => $mensaje
        ];
        header('Location: ?controller=contacto&action=index');
        exit;
    }

    $guardado = $this->modelo->create([
        'nombre'=> $nombre,
        'email'=> $email,
        'telefono'=> $telefono
        'asunto'=> $asunto,
        'mensaje'=> $mensaje
    ]);

    $_SESSION['exito'] = $guardado;
    header('Location: ?controller=contacto&action=index');
}
}