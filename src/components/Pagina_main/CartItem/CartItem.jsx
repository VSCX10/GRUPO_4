import React from 'react';
import { useCart } from '../../../context/CartContext.jsx';
import './CartItem.css';

const CartItem = ({ id, name, price, quantity, image }) => {
    const { addItem, removeItem } = useCart(); 

    return (
        <div className="CartItem">
            {image && <img src={image} alt={name} style={{width: "50px", marginRight: "10px"}} />}
            <h4>{name}</h4>
            <p>Cantidad: {quantity}</p>
            <p>Precio por unidad: S/. {price}</p>
            <p>Subtotal: S/. { (price * quantity).toFixed(2) }</p>
            <button className="CartItem-btn" onClick={() => addItem({ id, name, price, image }, 1)}>+</button>
            <span className="CartItem-qty">{quantity}</span>
            <button className="CartItem-btn" onClick={() => removeItem(id)}>-</button>
        </div>
    );
};

export default CartItem;