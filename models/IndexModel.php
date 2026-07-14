<?php

require_once __DIR__ . '/../config/database.php';

class IndexModel {
    private ?PDO $db;

    public function __construct() {

        $this -> db = Database::getConnection();
    }

    public function getAll(): array {
        try {

            $query = "SELECT id, nombre, descripcion, categoria, duracion, precio, imagen FROM cursos_destacados";
            
            $stmt = $this -> db -> prepare($query);
            
            $stmt->execute();
            
            return $stmt->fetchAll();
            
        } catch (PDOException $e) {

            error_log("Error en IndexModel::getAll: " . $e->getMessage());
            return [];
        }
    }
}