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
