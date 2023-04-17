import React, { useContext } from 'react';
import { deleteShoppingCart, getStoredCart, removedFromDB } from '../Utils/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import CartItem from './Cards/CartItem';
import { CartContext } from '../App';
import { toast } from 'react-hot-toast';


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    let total = 0;
    if (cart.length > 0) {
        for (const product of cart) {
            total += product.price * product.quantity;
        }
    }
    const handleRemovedItem = (id) => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining)
        removedFromDB(id)
        toast.error("Product Removed ! 👍")
    }

    const handleClearCart = (id) => {
        if (cart.length > 0) {
            setCart([])
            deleteShoppingCart();
            return toast.success("All Item Removed ! 👍")
        }
        {
            return toast.error("Cart is empty! 🔥")
        }
    }

    const orderHandler = () => {
        if (cart.length > 0) {
            setCart([])
            deleteShoppingCart();
            return toast.success("Order Placed! 👍")
        }
        {
            return toast.error("Cart is empty! 🔥")
        }
    }
    return (
        <div className='flex min-h-screen items-center justify-center
        bg bg-gray-100 text-gray-900'>
            <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10'>
                <h2 className='text-xl font-semibold'>
                    {cart ? 'Review Cart Items' : 'Cart is EMPTY!'}
                </h2>
                <ul className='flex flex-col divide-y divide-gray-700'>
                    {
                        cart.map(product => <CartItem
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
                    {cart.length > 0 ? (<button onClick={handleClearCart} className='btn-outlined'>Clear Cart</button>) : (
                        <Link to='/shop'><button className='btn-outlined'>Back To Shop</button></Link>
                    )}
                    <button className='btn-primary' onClick={orderHandler}>Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;