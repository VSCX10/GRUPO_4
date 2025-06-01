const users = [
  {
    id: 1,
    nombre: 'Juan',
    apellido: 'Pérez',
    correo: '12345678@example.com',
    contraseña: '12345678',
    rol: 'admin',
    dni: '12345678',
    estado: 'Activo', 
    fechaCreacion: '2023-01-15'
  },
  {
    id: 2,
    nombre: 'María',
    apellido: 'Gómez',
    correo: 'maria.gomez@example.com',
    contraseña: 'MariaG456',
    rol: 'usuario',
    dni: '23456789',
    estado: 'Inactivo', 
    fechaCreacion: '2023-02-20'
  },
  {
    id: 3,
    nombre: 'Carlos',
    apellido: 'Rodríguez',
    correo: 'carlos.rodriguez@example.com',
    contraseña: 'CarlosR789',
    rol: 'usuario',
    dni: '34567890',
    estado: 'Inactivo', 
    fechaCreacion: '2023-03-10'
  },
  {
    id: 4,
    nombre: 'Ana',
    apellido: 'López',
    correo: 'ana.lopez@example.com',
    contraseña: 'AnaLopez012',
    rol: 'usuario',
    dni: '45678901',
    estado: 'Activo', 
    fechaCreacion: '2023-04-05'
  },
  {
    id: 5,
    nombre: 'Luis',
    apellido: 'Martínez',
    correo: 'luis.martinez@example.com',
    contraseña: 'LuisM345',
    rol: 'usuario',
    dni: '56789012',
    estado: 'Activo', 
    fechaCreacion: '2023-05-12'
  },
  {
    id: 6,
    nombre: 'Sofía',
    apellido: 'García',
    correo: 'sofia.garcia@example.com',
    contraseña: 'SofiaG678',
    rol: 'usuario',
    dni: '67890123',
    estado: 'Inactivo', 
    fechaCreacion: '2023-06-18'
  },
  {
    id: 7,
    nombre: 'Pedro',
    apellido: 'Fernández',
    correo: 'pedro.fernandez@example.com',
    contraseña: 'PedroF901',
    rol: 'usuario',
    dni: '78901234',
    estado: 'Activo', 
    fechaCreacion: '2023-07-22'
  },
  {
    id: 8,
    nombre: 'Lucía',
    apellido: 'Díaz',
    correo: 'lucia.diaz@example.com',
    contraseña: 'LuciaD234',
    rol: 'admin',
    dni: '89012345',
    estado: 'Activo', 
    fechaCreacion: '2023-08-30'
  },
  {
    id: 9,
    nombre: 'Miguel',
    apellido: 'Hernández',
    correo: 'miguel.hernandez@example.com',
    contraseña: 'MiguelH567',
    rol: 'usuario',
    dni: '90123456',
    estado: 'Activo', 
    fechaCreacion: '2023-09-14'
  },
  {
    id: 10,
    nombre: 'Elena',
    apellido: 'Torres',
    correo: 'elena.torres@example.com',
    contraseña: 'ElenaT890',
    rol: 'usuario',
    dni: '01234567',
    estado: 'Inactivo',
    fechaCreacion: '2023-10-25'
  },
  {
    id: 11,
    nombre: 'Jorge',
    apellido: 'Ramírez',
    correo: 'jorge.ramirez@example.com',
    contraseña: 'JorgeR123',
    rol: 'usuario',
    dni: '12345679',
    estado: 'Activo', 
    fechaCreacion: '2023-11-03'
  },
  {
    id: 12,
    nombre: 'Patricia',
    apellido: 'Vargas',
    correo: 'patricia.vargas@example.com',
    contraseña: 'PatriciaV456',
    rol: 'usuario',
    dni: '23456780',
    estado: 'Inactivo', 
    fechaCreacion: '2023-12-19'
  }
];

const get = (id) => {
  return users.find(user => user.id == id);
};

const getAll = () => {
  return users;
};

export default { get, getAll };