import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDB } from '../Utils/fakeDB';
import { useContext } from 'react';
import { CartContext, ProductConText } from '../App';
import { toast } from 'react-hot-toast';


const Shop = () => {
    // const products=useLoaderData();
    const products = useContext(ProductConText);
    const [cart, setCart] = useContext(CartContext);
    const handleAddToCart = (product) => {
        let newCart = []
        const exists = cart.find(existingProduct => existingProduct.id === product.id)
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        toast.success('Product Added! 🛒', { autoClose: 500 })
        setCart(newCart)
        addToDB(product.id)
    }
    return (
        <div className='product-container'>
            {
                products.map(product => <ProductCard
                    product={product} key={product.id}
                    handleAddToCart={handleAddToCart}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;