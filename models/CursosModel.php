<?php

require_once __DIR__ . '/../config/database.php';

class CursosModel
{
    private PDO $conexion;

    public function __construct()
    {
        $this->conexion = Database::getConnection();
    }

    public function getAll(): array
    {
        $consulta = $this->conexion->prepare('SELECT * FROM cursos ORDER BY id');
        $consulta->execute();

        return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByCategory(string $categoria): array
    {
        $consulta = $this->conexion->prepare(
            'SELECT * FROM cursos WHERE categoria = :categoria ORDER BY id'
        );
        $consulta->execute([':categoria' => $categoria]);

        return $consulta->fetchAll(PDO::FETCH_ASSOC);
    }
}
