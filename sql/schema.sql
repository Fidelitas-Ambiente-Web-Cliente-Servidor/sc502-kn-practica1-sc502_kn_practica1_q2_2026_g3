CREATE TABLE IF NOT EXISTS cursos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    duracion VARCHAR(50) NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(150) NOT NULL
);

-- tabla de contacto
CREATE TABLE IF NOT EXISTS contacto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefono VARCHAR(20),
    asunto VARCHAR(150) NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cursos (nombre, descripcion, categoria, duracion, precio, imagen) VALUES
('HTML y CSS', 'Aprende a crear paginas web basicas.', 'Desarrollo Web', '7 semanas', 155.00, 'images/logo1.png'),
('Bootstrap Basico', 'Aprende a utilizar el framework de codigo abierto Bootstrap.', 'Desarrollo Web', '5 semanas', 100.00, 'images/logo1.1.png'),
('JavaScript Inicial', 'Inicia con los fundamentos de programacion para transformar paginas estaticas en interactivas.', 'Desarrollo Web', '8 semanas', 160.00, 'images/logotitle.png'),
('Python Inicial', 'Inicia y aprende programacion desde cero.', 'Programacion', '10 semanas', 165.00, 'images/logo1 copida.PNG'),
('Bases de Datos SQL', 'Aprende a crear tablas y consultas para guardar informacion.', 'Datos', '5 semanas', 110.00, 'images/AdobeColor-Mi tema de color.jpeg'),
('Seguridad Digital', 'Conoce conceptos basicos para navegar y proteger datos.', 'Seguridad', '6 semanas', 125.00, 'images/logo1.png');


-- inserts para la tabla de contacto
INSERT INTO contacto (nombre, email, telefono, asunto, mensaje) VALUES
('Ana Rodriguez', 'ana.rodriguez@ufide.ac.com', '8888-1234', 'Consulta sobre curso de Python', 'Hola, quisiera saber si el curso de Python Inicial tiene cupo disponible para el proximo trimestre.'),
('Carlos Mendez', 'carlos.mendez@goole.com', '8888-5678', 'Horarios disponibles', 'Buenas tardes, me gustaria conocer los horarios del curso de Bases de Datos SQL.'),
('maria Fernandez', 'maria.fernandez@practica3.com', '8888-9012', 'Metodos de pago', 'Quisiera saber que metodos de pago aceptan para inscribirme en el curso de Seguridad Digital.'),
('Jose Vargas', 'jose.vargas@novatech.com', '8888-3456', 'Certificacion', 'Me interesa saber si el curso de JavaScript Inicial otorga algun tipo de certificado al finalizar.'),
('Laura Jimenez', 'laura.jimenez@outlook.com', '8888-7890', 'Modalidad virtual', 'Buen dia, quisiera confirmar si los cursos de Desarrollo Web se imparten de forma virtual o presencial.');