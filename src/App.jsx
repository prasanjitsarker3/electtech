import React, { useContext, useState } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import { createContext } from 'react';
export const CartContext = createContext([]);
export const ProductConText = createContext([]);
const App = () => {
  const { cartArray, products } = useLoaderData();
  const [cart, setCart]=useState(cartArray);

  return (
    <>
      <ProductConText.Provider value={products}>
        <CartContext.Provider value={[cart,setCart]}>
          <Header></Header>
          <div className='min-h-[calc(100vh-137px)]'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </CartContext.Provider>
      </ProductConText.Provider>
    </>
  );
};

export default App;
