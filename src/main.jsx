import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home';
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { productAndCartData } from './components/CustomLoader/getCart&ProductData';
import toast, { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        loader:productAndCartData,
        children: ([
            {
                path: "/",
                element: <Home></Home>
            },
            {
                 path:"shop",
                element:<Shop></Shop>,
                loader:()=> fetch('products.json')
            },
            {
                path:"cart",
                element:<Cart></Cart>,
                loader: ()=> productAndCartData(),
            },
            {
                path:"about",
                element:<About></About>
            }
        ])
    }
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Toaster></Toaster>
        <RouterProvider router={router} />
    </React.StrictMode>
)
