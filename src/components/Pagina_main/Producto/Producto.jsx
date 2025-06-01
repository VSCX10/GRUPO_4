import './Producto.css' 
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import productosApi from '../../../api/gamesApi.js'; 
import Chip from '../Chip/Chip.jsx';
import { useCart } from '../../../context/CartContext.jsx'; 

const Producto = () => {

    const params = useParams()
    const productoId = params.productoId; 

    const defaultProducto = {
        id: 0,
        name: '',
        categoria: "",
        precioConDescuento: 0,
        price: 0,
        publisher: "",
        descripcion: "",
    }
    
    const [producto, setProducto] = useState(defaultProducto)

    const load = () => {
        const rawProducto = productosApi.get(productoId); 
        setProducto(rawProducto);
    }

    useEffect(() => {
        load()
    },[])

    const { addItem } = useCart();
    const [showMenu, setShowMenu] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddClick = () => {
        setQuantity(1);
        setShowMenu(true);
    };

    const handleConfirm = () => {
        const product = {
            id: producto.id,
            name: producto.name,
            price: producto.price, 
            image: producto.img,
        };
        addItem(product, quantity);
        setShowMenu(false);
    };
    

    const products = [
        { id: 1, name: "Uvas", price: 11.99, image: "../public/img/4345a46bc713ae382b27117b99dd5293bd24e581.png" },
        { id: 2, name: "Pera", price: 6.49, image: "../public/img/31c8c84eab895d9e9f98e701464d49279a7dcb9d.png" },
        { id: 3, name: "Manzana roja", price: 8.79, image: "../public/img/75faaca25dee36474600328830a3ad2a0da4aa9b.png" },
        { id: 4, name: "Pithaya ", price: 5.89, image: "../public/img/a0d5f30590ce9bdafbd8515abbf77aaaa6a06aba.png" },
        { id: 5, name: "Sandia", price: 1.99, image: "../public/img/0dc67fac1b72005efd83e64d8f28de5386ba8a76.png" },
    ];

    return (
        <>  
            <section>
                Supermercado - Frutas
            </section>
            <section className="sectionProducto"> 
            <div className="image-container">
                <img 
                    src={producto.img} 
                    alt={producto.name} 
                    className="product-image"
                />
            </div>

            <div className="info-container">
                <div className="top-section">
                    <h2 className="product-title">{producto.name}</h2>
                    <div className="tags">
                        <div>Presentacion</div>
                        <span className="category">{producto.publisher}</span>
                        <span className="genre">{producto.genero}</span>
                    </div>
                    <ul className="features-list">
                        {producto.caracteristicas?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>

                {}
                <div className="bottom-section">
                    <h3 className="description-title">Descripción:</h3>
                    <p className="product-description">{producto.descripcion}</p>
                    
                    <div className="price-container">
                        <span className="price">S/ {producto.precioConDescuento}</span>
                        <button className="similar-btn" onClick={handleAddClick}>Agregar al carrito</button>
                    </div>
                    {showMenu && (
                        <div className="cantidad-menu">
                            <div className="cantidad-menu-content">
                                <h4>¿Cuántos deseas llevar?</h4>
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={e => setQuantity(Number(e.target.value))}
                                    style={{ width: "60px", marginRight: "10px" }}
                                />
                                <button onClick={handleConfirm}>Confirmar</button>
                                <button onClick={() => setShowMenu(false)}>Cancelar</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
        <section>
        </section>
                    <section className="similar-products">
            <h2 className="similar-title">Productos similares</h2>
            <div className="similar-grid">
                {products.map((product) => (
                    <div className="similar-card" key={product.id}>
                        <div className="similar-img-container">
                            <img
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        <div className="similar-info">
                            <h4 className="similar-name">{product.name}</h4>
                            <div className="similar-category">Frutas y verduras</div>
                            <div className="similar-price">S/{product.price} X KG</div>
                            <button className="similar-btn">AGREGAR</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
        </>
    )
}

export default Producto