import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addItem = (item, quantity) => {
    setCart(prev => {
        if (prev.some(prod => prod.id === item.id)) {
            return prev.map(prod =>
                prod.id === item.id
                    ? { ...prod, quantity: prod.quantity + quantity }
                    : prod
            );
        } else {
            return [...prev, { ...item, quantity }];
        }
    });
};

    const removeItem = (itemId) => {
    setCart(prev =>
        prev
            .map(prod =>
                prod.id === itemId
                    ? { ...prod, quantity: prod.quantity - 1 }
                    : prod
            )
            .filter(prod => prod.quantity > 0)
        );
    };

    const clearCart = () => {
        setCart([]);
    };

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId);
    };

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total, isInCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};