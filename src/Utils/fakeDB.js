const addToDB = (id) => {
    let shoppingCart = {};
    const storeCart = localStorage.getItem("shoppingCart");
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }
    const quantity = shoppingCart[id];
    if (quantity) {
        const quantity = quantity + 1;
        shoppingCart[id] = quantity;
    }
    else {
        shoppingCart[id] = 1;
    } 
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}

const getStoredCart = () => {
    let shoppingCart = {};
    const storeCart = localStorage.getItem("shoppingCart");
    if (storeCart) {
        shoppingCart = JSON.parse(storeCart);
    }
    return shoppingCart;
}

const removedFromDB = (id) => {
    const storeCart = localStorage.getItem('shoppingCart')
    if (storeCart) {
        const shoppingCart = JSON.parse(storeCart)
        if (id in shoppingCart) {
            delete shoppingCart[id]
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
        }
    }
}
const deleteShoppingCart = () => {
    localStorage.removeItem('shoppingCart');
}

// export  {addToDB,getStoredCart};
export {
    addToDB,
    getStoredCart,
    deleteShoppingCart,
    removedFromDB
}