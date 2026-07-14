<!DOCTYPE html>
<html>
    <head>
        <title>Unidad 3</title>
    </head>
    <body>
<?php

    $nombre = "Brandon";
    $apellido="diaz";
    $edad=25;
    $altura=1.68;
    $esEstudiante = true;

    const SALTO_LINEA ="<br>";

    const EDAD_MAYOR =18;



    echo $nombre  ." " .$apellido.SALTO_LINEA;

    echo $edad;


    function saludar (){
        $nombre="bran";
        echo $nombre.SALTO_LINEA;

    }

    if($edad>=EDAD_MAYOR){
        if($esEstudiante){
        echo "Es mayor de edad y es estudiante". $nombre ."". $apellido ."".SALTO_LINEA;
        }else {
        echo "es mayor de edad y no es profesor".SALTO_LINEA;
        }
    }else{
        if($esEstudiante){
            echo "es mejor de edad y estudainte". $nombre ."". $apellido ."".SALTO_LINEA;
        }else {
            echo "es menor de edad y no es profesor"   .SALTO_LINEA;
        }
    }

    $semaforo ="verde";

    switch ($semaforo){

        case 'verde';
            echo "siga".SALTO_LINEA;
            break;

        case 'amarillo';
            echo "cuidado".SALTO_LINEA;
            break;

        case 'rojo';
            echo "pare".SALTO_LINEA;
            break;
    }

    $mensaje = ($esEstudiante) ? "es estudiante" : "no es estudiante";

    echo $mensaje.SALTO_LINEA;

    $a = "10";
    $b = 10;

    //?? es el mismo valor?
    if ($a == $b){
        echo $a. "es el mismo valor que". $b.SALTO_LINEA;
    }

    //?? Es el mismo valor Y tipo de dato?
    if ($a === $b) {
        echo $a . " es el mismo valor y tipo que " . $b . SALTO_LINEA;
    }

        //?? Son diferentes valores
    if ($a != $b) {
        echo $a . " es diferente valor que " . $b . SALTO_LINEA;
    }

    //?? Es diferente valor O tipo de dato?

    if ($a !== $b) {
        echo $a . " es diferente valor O tipo que " . $b . SALTO_LINEA;
    }

    if ($edad < EDAD_MAYOR) {
        echo "edad es menor que 18";
    }


    if ($edad >= EDAD_MAYOR && $esEstudiante) {
        echo "Es mayor de edad y estudiante" . SALTO_LINEA;
    }


    if ($edad < EDAD_MAYOR || $esEstudiante) {
        echo "Es menor de edad o profesor" . SALTO_LINEA;
    }

    if ($edad >= EDAD_MAYOR && !$esEstudiante) {
        echo "Es mayor de edad y no profesor" . SALTO_LINEA;
    }

    // hasta  un numero definido for
    //tabla del 5
    echo "Tabla del 5" . SALTO_LINEA;
    for ($i = 0; $i <= 10; $i++) {
        echo "5 X " . $i . " = " . ($i * 5) . SALTO_LINEA;
    }

    $edad = 28;
    while ($edad < 30) {
        $edad++;
        echo $edad . SALTO_LINEA;
    }
    //$edad = 28;
    do {
        $edad++;
        echo $edad . SALTO_LINEA;
    } while ($edad < 30);

    ?>

    


    </body>
</html>