CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    duracion VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(150) NOT NULL
);

INSERT INTO cursos (nombre, descripcion, categoria, duracion, precio, imagen) VALUES
('HTML y CSS', 'Aprende a crear paginas web basicas.', 'Desarrollo Web', '7 semanas', 155.00, 'images/logo1.png'),
('Bootstrap Basico', 'Aprende a utilizar el framework de codigo abierto Bootstrap.', 'Desarrollo Web', '5 semanas', 100.00, 'images/logo1.1.png'),
('JavaScript Inicial', 'Inicia con los fundamentos de programacion para transformar paginas estaticas en interactivas.', 'Desarrollo Web', '8 semanas', 160.00, 'images/logotitle.png'),
('Python Inicial', 'Inicia y aprende programacion desde cero.', 'Programacion', '10 semanas', 165.00, 'images/logo1 copida.PNG'),
('Bases de Datos SQL', 'Aprende a crear tablas y consultas para guardar informacion.', 'Datos', '5 semanas', 110.00, 'images/AdobeColor-Mi tema de color.jpeg'),
('Seguridad Digital', 'Conoce conceptos basicos para navegar y proteger datos.', 'Seguridad', '6 semanas', 125.00, 'images/logo1.png');

CREATE TABLE IF NOT EXISTS cursos_destacados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    imagen VARCHAR(255) NOT NULL,
    duracion VARCHAR(50) DEFAULT NULL,
    precio DECIMAL(10, 2) DEFAULT NULL
);

INSERT INTO cursos_destacados (nombre, descripcion, categoria, imagen, duracion, precio) VALUES
('Desarrollo web', 'Este curso aprenderemos los fundamentos del desarrollo web, con buenas practicas de diseño y programacion.', 'Desarrollo Web', 'images/web.png', '8 semanas', 150.00),
('Programación en Python', 'En este curso aprenderás conceptos fundamentales de la programación en Python.', 'Programacion', 'images/pyton.png', '10 semanas', 165.00),
('Base de Datos SQL', 'En este curso aprenderás conceptos fundamentales en la creacion y gestion de bases de datos MySQL.', 'Datos', 'images/mysql.png', '5 semanas', 110.00),
('HTML y CSS', 'Aprende a crear paginas web basicas.', 'Desarrollo Web', 'images/logo1.png', '7 semanas', 155.00),
('Bootstrap Basico', 'Aprende a utilizar el framework de codigo abierto Bootstrap.', 'Desarrollo Web', 'images/logo1.1.png', '5 semanas', 100.00);