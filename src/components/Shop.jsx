import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDB } from '../Utils/fakeDB';


const Shop = () => {
    const products=useLoaderData();

    const handleAddToCart=(id)=>{   
        addToDB(id)
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