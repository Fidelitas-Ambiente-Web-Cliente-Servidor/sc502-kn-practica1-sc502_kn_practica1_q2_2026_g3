<?php

require_once DIR__ . '/../config/database.php';

class ContactoModel
{
    private PDO $conexion;

    public function __construct()
    {
    $this->conexion = Database::getConnection();


    }

    public function create (array $datos):bool
    {

    $consulta = $this->conexion->prepare(
        'INSERT INTO contactos (nombre, email, telefono, asunto, mensaje) VALUES (:nombre, :email, :telefono, :asunto, :mensaje)'
    );

    return $consulta->execute([
        ':nombre' => $datos['nombre'],
        ':email' => $datos['email'],
        ':telefono' => $datos['telefono'],
        ':asunto' => $datos['asunto'],
        ':mensaje' => $datos['mensaje'],
    ]);
    }
    

}