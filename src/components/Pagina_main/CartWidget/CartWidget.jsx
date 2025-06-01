import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext.jsx'; 
import './CartWidget.css'; 

const cartImageUrl = '/images/cart.svg'; 

const CartWidget = () => {
    const { totalQuantity } = useCart();

    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'flex' : 'none', alignItems: 'center', textDecoration: 'none' }}>
            <img className='CartImg' src={cartImageUrl} alt='cart-widget' style={{ width: '24px', height: '24px', marginRight: '5px' }}/>
            <span>{totalQuantity}</span>
        </Link>
    );
};

export default CartWidget;