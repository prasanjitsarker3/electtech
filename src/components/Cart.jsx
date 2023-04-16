import React from 'react';
import { deleteShoppingCart, getStoredCart, removedFromDB } from '../Utils/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';


const Cart = () => {
    const cartArray = useLoaderData();
    let total = 0;
    if (cartArray.length > 0) {
        for (const product of cartArray) {
            total += product.price * product.quantity;
        }
    }
    const handleRemovedItem=(id)=>{
    removedFromDB(id)
    }

    const handleClearCart=(id)=>{
        deleteShoppingCart();
    }
    return (
        <div className='flex min-h-screen items-center justify-center
        bg bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>
                    {cartArray ? 'Review Cart Items' : 'Cart is EMPTY!'}
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cartArray.map(product => <CartItem
                            product={product} key={product.id}
                            handleRemovedItem={handleRemovedItem}
                        ></CartItem>)
                    }
                </ul>
                <div className='space-y-1 text-right'>
                    <p>
                        Total Amount: <span className='font-semibold'>{total}$</span>
                    </p>
                    <p className='text-sm text-gray-400'>
                        Not Including taxes and shipping coast
                    </p>
                </div>
                <div className='flex justify-end space-x-4'>
                    {cartArray.length > 0 ? (<button onClick={handleClearCart} className='btn-outlined'>Clear Cart</button>) : (
                        <Link to='/shop'><button className='btn-outlined'>Back To Shop</button></Link>
                    )}
                    <button className='btn-primary'>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;