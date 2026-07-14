<?php
$controllerName = $_GET['controller'] ?? 'index';
$actionName = $_GET['action'] ?? 'index';

$controllerClass = ucfirst($controllerName) . 'Controller';

$controllerFile = __DIR__ . '/controllers/' . $controllerClass . '.php';

if (file_exists($controllerFile)) {

    require_once $controllerFile;

    if (class_exists($controllerClass)) {

        $controllerInstance = new $controllerClass();

        if (method_exists($controllerInstance, $actionName)) {

            $controllerInstance -> $actionName();
        } else {
            http_response_code(404);
            die("<h2>Error 404 - Acción no encontrada</h2><p>El método '{$actionName}' no existe en '{$controllerClass}'.</p>");
        }
    } else {
        http_response_code(404);
        die("<h2>Error 404 - Clase no encontrada</h2><p>La clase '{$controllerClass}' no está definida en el archivo.</p>");
    }
} else {
    http_response_code(404);
    die("<h2>Error 404 - Controlador no encontrado</h2><p>No se encontró el archivo del controlador para '{$controllerName}'.</p>");
}
