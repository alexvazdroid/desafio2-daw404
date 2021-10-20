import { createContext, useState, useEffect } from "react";
import Data from './../../data/products.js'
export const DataContext = createContext();

export const DataProvider = (props) =>{

    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        const productos = Data.products;

        if (productos) {
            setProductos(productos)
        }else {
            setProductos([])
        }
        
    },[])

    const value = {
        productos : [productos]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}