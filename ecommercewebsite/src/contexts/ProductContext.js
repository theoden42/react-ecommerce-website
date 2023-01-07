import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, SetProducts] = useState([]);
    useEffect(()=>{
        const fetchproducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const responsejson = await response.json();
            SetProducts(responsejson);
        };
        fetchproducts();
        
    }, []);

    return <ProductContext.Provider value={{products}}>{ children }</ProductContext.Provider>;

};

export default ProductProvider;
