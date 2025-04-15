import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const addToCart = (product) => {
        setCartItems(prev => {
            const existingItem = prev.find(item => item.id === product.id);
            if (existingItem) {
                return prev.map(item => item.id === product.id 
                    ? { ...item, quantity: item.quantity + 1 } 
                    : item
                );
            }

            return [ ...prev, { ...product, quantity: 1 } ];
        });

        alert(`${product.name} added to cart`);
        navigate('/cart');
    };

    const removeCart = (product) => {
        setCartItems(prev => prev.filter(item => item.id !== product.id));
    };

    const increaseQuantity = (product) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === product.id) {
                const newQuantity = Math.min(item.quantity + 1, 6);
                return { ...item, quantity: newQuantity };
            }
            return item;
        } 
        ));
    };

    const decreaseQuantity = (product) => {
        setCartItems(prev => prev.map(item => item.id === product.id 
            ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
            : item
        ));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeCart, increaseQuantity, decreaseQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};