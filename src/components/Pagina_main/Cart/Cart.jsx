import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext.jsx';
import CartItem from '../CartItem/CartItem'; 
import CartSummary from '../CartSummary/CartSummary.jsx';
import './Cart.css'; 

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useCart();

    if (totalQuantity === 0) {
        return (
            <div className="EmptyCartContainer">
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='ButtonLarge'>Ver Productos</Link>
            </div>
        );
    }

    return (
        <div className="CartMainLayout">
            <div className="CartContainer">
                {cart.map(p => <CartItem key={p.id} {...p} />)}
                <h3>Total: S/. {total.toFixed(2)}</h3>
                <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            </div>
            <CartSummary />
        </div>
    );
};

export default Cart;