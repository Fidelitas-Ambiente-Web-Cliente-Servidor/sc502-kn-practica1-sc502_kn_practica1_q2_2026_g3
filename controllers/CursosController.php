<?php

require_once __DIR__ . '/../models/CursosModel.php';

class CursosController
{
    private CursosModel $modelo;

    public function __construct()
    {
        $this->modelo = new CursosModel();
    }

    public function index(): void
    {
        $categoria = $_GET['categoria'] ?? 'Todas';

        if ($categoria === 'Todas') {
            $cursos = $this->modelo->getAll();
        } else {
            $cursos = $this->modelo->getByCategory($categoria);
        }

        require __DIR__ . '/../views/cursos.php';
    }
}