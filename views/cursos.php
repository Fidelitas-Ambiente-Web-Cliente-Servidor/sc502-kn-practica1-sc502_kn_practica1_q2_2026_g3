<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Catalogo de cursos de NovaCore Technologies.">
    <link rel="shortcut icon" href="images/logotitle.png">
    <title>Cursos | NovaCore</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/boostrap.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/cursos.css">
</head>

<body>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php?controller=index&action=index">
                <img class="logo" src="images/logotitle.png" alt="Logo Nova Core">
                <div class="logo-text">
                    <p class="logo-text-1">NovaCore</p>
                    <p class="logo-text-2">TECHNOLOGIES</p>
                </div>
            </a>
            <div class="navbar-nav ms-auto">
                <a class="nav-link" href="index.php?controller=index&action=index">Inicio</a>
                <a class="nav-link activo" href="index.php?controller=cursos&action=index">Cursos</a>
                <a class="nav-link" href="index.php?controller=profesores&action=index">Profesores</a>
                <a class="nav-link" href="index.php?controller=contacto&action=index">Contacto</a>
            </div>
        </div>
    </nav>

    <main class="container py-5">
        <header class="mb-4">
            <h1>Cursos</h1>
            <p class="descripcion">Estos son los cursos disponibles en NovaCore Technologies para aprender sobre tecnologia y programacion.</p>
        </header>

        <section class="mb-4">
            <form method="GET" action="index.php" class="row">
                <input type="hidden" name="controller" value="cursos">
                <input type="hidden" name="action" value="index">
                <div class="col-12 col-md-6 mb-3">
                    <label for="categoria" class="form-label">Categoria</label>
                    <select id="categoria" name="categoria" class="form-select" onchange="this.form.submit()">
                        <option value="Todas" <?= $categoria === 'Todas' ? 'selected' : '' ?>>Todas las categorias</option>
                        <option value="Desarrollo Web" <?= $categoria === 'Desarrollo Web' ? 'selected' : '' ?>>Desarrollo Web</option>
                        <option value="Programacion" <?= $categoria === 'Programacion' ? 'selected' : '' ?>>Programacion</option>
                        <option value="Datos" <?= $categoria === 'Datos' ? 'selected' : '' ?>>Datos</option>
                        <option value="Seguridad" <?= $categoria === 'Seguridad' ? 'selected' : '' ?>>Seguridad</option>
                    </select>
                </div>
                <div class="col-12 col-md-2 mb-3 d-flex align-items-end">
                    <button type="submit" class="btn btn-primary">Filtrar</button>
                </div>
            </form>
        </section>

        <section>
            <h2>Catalogo de Cursos</h2>
            <div class="row">
                <?php if (empty($cursos)): ?>
                    <p class="mensaje-cursos">No se encontraron cursos.</p>
                <?php else: ?>
                    <?php foreach ($cursos as $curso): ?>
                        <div class="col-12 col-md-6 col-lg-4 mb-4">
                            <article class="curso">
                                <img src="<?= htmlspecialchars($curso['imagen']) ?>" alt="Curso <?= htmlspecialchars($curso['nombre']) ?>">
                                <h3><?= htmlspecialchars($curso['nombre']) ?></h3>
                                <p class="categoria">Categoria: <?= htmlspecialchars($curso['categoria']) ?></p>
                                <p><?= htmlspecialchars($curso['descripcion']) ?></p>
                                <p>Duracion: <?= htmlspecialchars($curso['duracion']) ?></p>
                                <p class="precio">Precio: $<?= htmlspecialchars($curso['precio']) ?></p>
                            </article>
                        </div>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </section>
    </main>
</body>

</html>
