import './ProductoCard.css'
import { useState } from 'react';
import { useCart } from '../../../../context/CartContext.jsx';

const ProductoCard = (props) => {
    const { addItem } = useCart();
    const [showMenu, setShowMenu] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const handleAddClick = () => {
        setQuantity(1);
        setShowMenu(true);
    };

    const handleConfirm = () => {
        
        const product = {
            id: props.id,
            name: props.name,
            price: props.price,
            image: props.img,
        };
        addItem(product, quantity);
        setShowMenu(false);
    };

    return(
        <article className="producto-card">
            <div className="card-content">
                <a href={`productos/${props.id}`} className="image-link">
                    <img 
                        src={props.img} 
                        alt={props.name} 
                        className="product-image"
                    />
                </a>
                <div className="text-content">
                    <h3 className="product-title">
                        <a href={`productos/${props.id}`}>{props.name}</a>
                    </h3>
                    <p className="product-category">{props.category}</p>
                    <div className="price-container">
                        <span className="current-price">S/ {props.price} x unidad</span>
                    </div>
                    <button className="add-button1" onClick={handleAddClick}>Agregar</button>
                </div>
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
        </article>
    )
}

export default ProductoCard;