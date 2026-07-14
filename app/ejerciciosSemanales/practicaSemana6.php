<!DOCTYPE html>
<html>
    <head>
        <title>Unidad 3</title>
    </head>
    <body>
<?php

/* =========================
   DECLARACIÓN DE VARIABLES
   ========================= */

$nombre = "Juan";
$apellido = "Perez";
$direccion = "San José, Costa Rica";
$hobbie = "Jugar fútbol";
$colorFavorito = "Azul";
$leGustaLeer = true;

echo "<h3>Información Personal</h3>";
echo "<ul>";
echo "<li>Nombre: $nombre</li>";
echo "<li>Apellido: $apellido</li>";
echo "<li>Dirección: $direccion</li>";
echo "<li>Hobbie: $hobbie</li>";
echo "<li>Color Favorito: $colorFavorito</li>";
echo "<li>¿Le gusta leer?: " . ($leGustaLeer ? "Sí" : "No") . "</li>";
echo "</ul>";
/* =========================
   CONDICIONALES
   ========================= */

// 1. Mayor de edad
$edad = 20;

echo "<h3>Mayor de edad</h3>";

if ($edad >= 18) {
    echo "La persona es mayor de edad.<br>";
} else {
    echo "La persona es menor de edad.<br>";
}

// 2. Nota
$nota = 60;

echo "<h3>Calificación</h3>";

if ($nota > 90) {
    echo "La nota es A<br>";
} elseif ($nota >= 70 && $nota <= 90) {
    echo "La nota es B<br>";
} else {
    echo "La nota es C<br>";
}

// 3. Calculadora
$numero1 = 10;
$numero2 = 5;
$operador = "*";

echo "<h3>Calculadora</h3>";

switch ($operador) {
    case "+":
        echo "$numero1 + $numero2 = " . ($numero1 + $numero2);
        break;

    case "-":
        echo "$numero1 - $numero2 = " . ($numero1 - $numero2);
        break;

    case "*":
        echo "$numero1 * $numero2 = " . ($numero1 * $numero2);
        break;

    case "/":
        if ($numero2 != 0) {
            echo "$numero1 / $numero2 = " . ($numero1 / $numero2);
        } else {
            echo "No se puede dividir entre cero.";
        }
        break;

    default:
        echo "Operador no válido.";
}

echo "<br>";

/* =========================
   OPERADORES
   ========================= */

// 1. Número mayor
$num1 = 15;
$num2 = 30;
$num3 = 20;

$mayor = max($num1, $num2, $num3);

echo "<h3>Número Mayor</h3>";
echo "El número mayor es: $mayor<br>";

// 2. Clasificación por edad
$edadPersona = 65;

echo "<h3>Clasificación por Edad</h3>";

if ($edadPersona <= 12) {
    echo "Niño<br>";
} elseif ($edadPersona <= 17) {
    echo "Adolescente<br>";
} elseif ($edadPersona <= 59) {
    echo "Adulto<br>";
} else {
    echo "Adulto Mayor<br>";
}

// 3. Validar contraseñas
$contrasena1 = "12345";
$contrasena2 = "12345";

echo "<h3>Validación de Contraseñas</h3>";

if ($contrasena1 == $contrasena2) {
    echo "Las contraseñas son iguales.<br>";
} else {
    echo "Las contraseñas son diferentes.<br>";
}

/* =========================
   CICLOS
   ========================= */

// 1. Pares del 1 al 20 (while)
echo "<h3>Números pares del 1 al 20</h3>";

$i = 1;

while ($i <= 20) {
    if ($i % 2 == 0) {
        echo $i . " ";
    }
    $i++;
}

echo "<br>";

// 2. Tabla del 7 (for)
echo "<h3>Tabla del 7</h3>";

for ($i = 1; $i <= 10; $i++) {
    echo "7 x $i = " . (7 * $i) . "<br>";
}

// 3. Contar del 20 al 0 (do while)
echo "<h3>Conteo del 20 al 0</h3>";

$contador = 20;

do {
    echo $contador . " ";
    $contador--;
} while ($contador >= 0);

?>

    </body>
</html>