<?php require_once 'views/layout/header.php'; ?>

<!-- Contenido principal -->
<main>
    <!-- Logo principal -->
    <div class="container-principal">
        <div class="container-logo-principal">
            <img class="logo-principal" src="./images/logotitle.png" alt="Logo Nova Cor">
            <div class="sombra-logo-principal"></div>
        </div>
        <div class="logo-principal-texto">
            <h1 class="logo-principal-texto1">NOVACORE</h1>
            <span class="logo-principal-texto2">TECHNOLOGIES</span>
            <span class="logo-principal-texto3">INOVACIÓN & CENTRO DE SOLUCIONES</span>
        </div>
    </div>

    <!-- Iconos lenguajes -->
    <div class="container-iconos">
        <div class="tarjeta-iconos"><img src="./images/logo1.png" alt="icono lenguaje" class="icono"></div>
        <div class="tarjeta-iconos"><img src="./images/logo1.png" alt="icono lenguaje" class="icono"></div>
        <div class="tarjeta-iconos"><img src="./images/logo1.png" alt="icono lenguaje" class="icono"></div>
        <div class="tarjeta-iconos"><img src="./images/logo1.png" alt="icono lenguaje" class="icono"></div>
    </div>

    <section class="container-lema">
        <p class="lema1">DESATA EL PODER DE TU INGENIO</p>
        <p class="lema2">Aprende con los mejores expertos en tecnología</p>
        <a class="boton-lema3 boton" href="index.php?controller=contacto&action=index">¡INSCRÍBETE HOY!</a>
    </section>

    <!-- Cursos destacados -->
    <section class="container-principal-tarjeta">
        <h2 class="titulo-secundario titulo-cursos">Nuestros cursos más populares</h2>
        <div class="container-tarjetas container-cursos">

            <?php if (!empty($cursos)): ?>
                <?php foreach ($cursos as $curso): ?>
                    <article class="tarjeta">
                        <img src="<?php echo htmlspecialchars($curso['imagen']); ?>" alt="<?php echo htmlspecialchars($curso['nombre']); ?>" class="icono">
                        <h3 class="estadisticas-titulo"><?php echo htmlspecialchars($curso['nombre']); ?></h3>
                        <p class="estudiante-descripcion"><?php echo htmlspecialchars($curso['descripcion']); ?></p>
                        <p class="badge bg-primary text-wrap" style="width: 6rem;"><?php echo htmlspecialchars($curso['categoria']); ?></p>
                        <p><strong>Duración:</strong> <?php echo htmlspecialchars($curso['duracion']); ?></p>
                        <p><strong>Precio:</strong> $<?php echo htmlspecialchars($curso['precio']); ?></p>
                    </article>
                <?php endforeach; ?>
            <?php else: ?>
                <p class="text-center">No hay cursos destacados disponibles en este momento.</p>
            <?php endif; ?>

        </div>
    </section>

    <!-- Estadisticas de la academia -->
    <section class="container-principal-tarjeta">
        <h2 class="titulo-secundario titulo-estadisticas">Nuestros numeros hablan por sí mismos</h2>
        <div class="container-tarjetas container-estadisticas">
            <article class="tarjeta estadisticas-estudiantes">
                <h3 class="estadisticas-titulo">Estudiantes</h3>
                <div class="luz-estadistica">
                    <p class="numero-estadistica">+3000</p>
                </div>
            </article>
            <article class="tarjeta estadisticas-cursos">
                <h3 class="estadisticas-titulo">Cursos</h3>
                <div class="luz-estadistica">
                    <p class="numero-estadistica">+250</p>
                </div>
            </article>
            <article class="tarjeta estadisticas-profesores">
                <h3 class="estadisticas-titulo">Profesores</h3>
                <div class="luz-estadistica">
                    <p class="numero-estadistica">+100</p>
                </div>
            </article>
        </div>
    </section>

    <!-- Testimonios -->
    <section class="container-principal-tarjeta">
        <h2 class="titulo-secundario titulo-testimonios">Testimonios de nuestros estudiantes</h2>
        <div class="container-tarjetas container-testimonios">
            <article class="tarjeta tarjeta-estudiante">
                <img src="./images/estudiante1.jpg" alt="estudiante" class="imagen-estudiante">
                <h3 class="nombre-estudiante">Carlos Gutierres</h3>
                <p class="estudiante-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam voluptatibus, provident quibusdam aliquam...</p>
            </article>

            <article class="tarjeta tarjeta-estudiante">
                <img src="./images/estudiante3.jpg" alt="estudiante" class="imagen-estudiante">
                <h3 class="nombre-estudiante">Monica Alvarado</h3>
                <p class="estudiante-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam voluptatibus, provident quibusdam aliquam...</p>
            </article>

            <article class="tarjeta tarjeta-estudiante">
                <img src="./images/estudiante2.jpg" alt="estudiante" class="imagen-estudiante">
                <h3 class="nombre-estudiante">Jose Garcia</h3>
                <p class="estudiante-descripcion">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam voluptatibus, provident quibusdam aliquam...</p>
            </article>
        </div>
    </section>
</main>

<?php require_once 'views/layout/footer.php'; ?>