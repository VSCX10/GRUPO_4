const categoriasApi = [

    {
        id:'1',
        nombre: 'Frutas y Verduras',
        descripcion: 'Productos frescos y saludables, ideales para una alimentación balanceada.',
    },

    {
        id:'2',
        nombre: 'Carne, aves y pescados',
        descripcion: 'Todo tipo de bebidas refrescantes y energizantes.',
    },

    {
        id:'3',
        nombre: 'Abarrotes',
        descripcion: 'Productos alimenticios variados, desde snacks hasta ingredientes básicos.',
    },

    {
        id:'4',
        nombre: 'Panadería',
        descripcion: 'Artículos de limpieza para el hogar y la oficina.',
    },

    {
        id:'5',
        nombre: 'Congelados',
        descripcion: 'Productos para el cuidado personal y la higiene diaria.',
    },

    {
        id:'6',
        nombre: 'Lácteos',
        descripcion: 'Productos lácteos frescos y deliciosos, como leche, yogur y quesos.',
    },
    {
        id:'7',
        nombre: 'Bebidas',
        descripcion: 'Todo tipo de bebidas refrescantes y energizantes.',
    },

    {
        id:'8',
        nombre: 'Limpieza',
        descripcion: 'Artículos de limpieza para el hogar y la oficina.',
    },

    {
        id:'9',
        nombre: 'Cuidado Personal',
        descripcion: 'Productos para el cuidado personal y la higiene diaria.',
    },
    {
        id:'10',
        nombre: 'Mascotas',
        descripcion: 'Alimentos y accesorios para el cuidado de tus mascotas.',
    }
];

const get=(id)=> categoriasApi.find(c => c.id === id);
const getAll = () => categoriasApi;
export default {
    get,
    getAll
}
