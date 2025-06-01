import { useState, useEffect } from 'react';
import ProductoCard from './ProductoCard/ProductoCard';
import './Productos.css';
import { useSearch } from '../../../../src/context/SearchContext.jsx';

const Productos = () => {
    const productos = [
        {
            id: 1,
            name: 'Zanahoria',
            categoria: 'Frutas y verduras',
            precioConDescuento: 2.99 + ' x kg',
            price: 2.99,
            img: "public/img/013524b583e0072a7324f9c7fa4f5aa68d786ade.png"
        },
        {
            id: 2,
            name: 'Papaya',
            categoria: 'Frutas y verduras',
            precioConDescuento: 5.99 + ' x kg',
            price: 5.99,
            img: "public/img/01c107ed036de327cb02b5d85900ee783aa47c07.png"
        },
        {
            id: 3,
            name: 'Mix de frutos',  
            categoria: 'Frutas y verduras',
            precioConDescuento: 5.69 + ' x un',
            price: 5.69,
            img: "public/img/fdfff53b8ee38ceab77aa7b7449b91abce0cd3c2.png"
        },
        {
            id: 4,
            name: 'Manzana',
            categoria: 'Frutas y verduras',
            precioConDescuento: 3.80 + ' x kg',
            price: 3.80,
            img: "public/img/954d27a0111264fb3caa9d662f9f1ac1502d00cd.png"  
        },
        {
            id: 5,
            name: 'Naranja',
            categoria: 'Frutas y verduras',
            precioConDescuento: 3.69 + ' x kg',
            price: 3.69,
            img: "public/img/95c20b015c660121c6d938dbdd050055e385ad9a.png"
        },
        {
            id: 6,
            name: 'Piña',
            categoria: 'Frutas y verduras',
            precioConDescuento: 2.79 + ' x kg',
            price: 2.79,
            img: "public/img/3c3aa7cf7c4693656ca58b61d026cfaaf2a73590.png"
        },
        {
            id: 7,
            name: 'Sandía',
            categoria: 'Frutas y verduras',
            precioConDescuento: 1.99 + ' x kg',
            price: 1.99,
            img: "public/img/0dc67fac1b72005efd83e64d8f28de5386ba8a76.png"
        },
        {
            id: 8,
            name: 'Uvas',
            categoria: 'Frutas y verduras',
            precioConDescuento: 11.99 + ' x kg',
            price: 11.99,
            img: "public/img/4345a46bc713ae382b27117b99dd5293bd24e581.png"
        },
        {
            id: 9,
            name: 'Pera',
            categoria: 'Frutas y verduras',
            precioConDescuento: 6.49 + ' x kg',
            price: 6.49,
            img: "public/img/31c8c84eab895d9e9f98e701464d49279a7dcb9d.png"
        },
        {
            id: 10,
            name: 'Manzana roja',
            categoria: 'Frutas y verduras',
            precioConDescuento: 8.79 + ' x kg',
            price: 8.79,
            img: "public/img/75faaca25dee36474600328830a3ad2a0da4aa9b.png"
        },
        {
            id: 11,
            name: 'Pithaya',
            categoria: 'Frutas y verduras',
            precioConDescuento: 5.89 + ' x kg',
            price: 5.89,
            img: "public/img/a0d5f30590ce9bdafbd8515abbf77aaaa6a06aba.png"
        },
        {
            id: 12,
            name: 'Fresa',
            categoria: 'Frutas y verduras',
            precioConDescuento: 8.89 + ' x kg',
            price: 8.89,
            img: "public/img/istockphoto-1157946861-612x612.jpg"
        },
        {
            id: 13,
            name: 'Carne',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: 13.89 + ' x kg',
            price: 13.89,
            img: "public/img/6dd24c8896e01f1a8253c57baef9c0924d72ea35.png"
        },
        {
            id: 14,
            name: 'Pollo',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: 10.89 + ' x kg',
            price: 10.89,
            img: "public/img/857d0311b665e1b9d7ad7f26cca9de21b6ee138f.png"
        },
        {
            id: 15,
            name: 'Arroz',
            categoria: 'Abarrotes',
            precioConDescuento: 5.89 + ' x kg',
            price: 5.89,
            img: "public/img/1ca7e26da2f5ec5fa4b515d39099d85ba4c8ce47.png"
        },
        {
            id: 16,
            name: 'Azucar',
            categoria: 'Abarrotes',
            precioConDescuento: 4.89 + ' x kg',
            price: 4.89,
            img: "public/img/9c9e092b9472fad2a8dad58923177f57e8bc7545.png"
        },
        
        {
            id: 17,
            name: 'Aceite',
            categoria: 'Abarrotes',
            precioConDescuento: 7.99 + ' x kg',
            price: 7.99,
            img: "public/img/727280-1200-auto.webp"
        },
        {
            id: 18,
            name: 'Fideos',
            categoria: 'Abarrotes',
            precioConDescuento: 8.99 + ' x kg',
            price: 8.99,
            img: "public/img/727281-1200-auto.webp"
        },
        {
            id: 19,
            name: 'Atun',
            categoria: 'Abarrotes',
            precioConDescuento: 5.99 + ' x kg',
            price: 5.99,
            img: "public/img/758878-1200-auto.webp"
        },
        {
            id: 20,
            name: 'Avena',
            categoria: 'Abarrotes',
            precioConDescuento: 6.99 + ' x kg',
            price: 6.99,
            img: "public/img/eb94d39f23f230c669ec53cc4c8578972c1028ab.png"
        },
        {
            id: 21,
            name: 'Tomahawk',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: 20.99 + ' x kg',
            price: 20.99,
            img: "public/img/744519-1.jpg.webp"
        },
        {
            id: 22,
            name: 'Carne molida',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: 4.99 + ' x kg',
            price: 4.99,
            img: "public/img/109178-01-7312.jpg.webp"
        },
        {
            id: 23,
            name: 'Pescado',
            categoria: 'Carnes, aves y pescados',
            precioConDescuento: 5.50 + ' x kg',
            price: 5.50,
            img: "public/img/filetdemero-1.png"
        },
        {
            id: 24,
            name: 'Cafe',
            categoria: 'Abarrotes',
            precioConDescuento: 6.99 + ' x kg',
            price: 6.99,
            img: "public/img/b03a20cf9778284cb1227135894c082e707913b0.png"
        },
    ];

    const { searchTerm } = useSearch();
    const [filteredProductos, setFilteredProductos] = useState(productos);
    const [selectedCategory, setSelectedCategory] = useState('Todas');
    const [sortBy, setSortBy] = useState('default');

    const categorias = [
        'Todas',
        'Frutas y verduras',
        'Carnes, aves y pescados',
        'Abarrotes'
    ];

    const sortOptions = [
        { value: 'default', label: 'Ordenar por' },
        { value: 'price-asc', label: 'Precio: Menor a mayor' },
        { value: 'price-desc', label: 'Precio: Mayor a menor' },
        { value: 'name-asc', label: 'Nombre: A-Z' },
        { value: 'name-desc', label: 'Nombre: Z-A' }
    ];

    useEffect(() => {
        let filtered = [...productos];

        if(selectedCategory !== 'Todas') {
            filtered = filtered.filter(producto => producto.categoria === selectedCategory);
        }
        
        if(searchTerm) {
            filtered = filtered.filter(producto => 
                producto.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
            const priceA = parseFloat(a.precioConDescuento.split(' ')[0]);
            const priceB = parseFloat(b.precioConDescuento.split(' ')[0]);
            
            switch(sortBy) {
                case 'price-asc':
                    return priceA - priceB;
                case 'price-desc':
                    return priceB - priceA;
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                default:
                    return 0;
            }
        });

        setFilteredProductos(filtered);
    }, [searchTerm, selectedCategory, sortBy, productos]);

    return (
        <main className="mainProductoCard">
            <aside className="category-filter">
                <h3>Filtrar por categoría</h3>
                <div className="category-buttons">
                    {categorias.map(categoria => (
                        <button
                            key={categoria}
                            className={selectedCategory === categoria ? 'active' : ''}
                            onClick={() => setSelectedCategory(categoria)}
                        >
                            {categoria}
                        </button>
                    ))}
                </div>
            </aside>

            <div className="content-wrapper">
                <div className="controls-container">                    
                    <select 
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="sort-select"
                    >
                        {sortOptions.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                
                <section className="product-list">
                {filteredProductos.map(producto => 
                    <ProductoCard 
                        key={producto.id}
                        {...producto}
                    />
                )}
                </section>
            </div>
        </main>
    )
}

export default Productos;