import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import ProductList from './mocks/productList';
import './styles.css';


const ItemListContainer = () => {

    const [products,setProducts]= useState ([]);
   

    useEffect (() => {

        const promise = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (ProductList)
            }, 2000);
            
        });
        promise.then((result) => setProducts(result));
    }, []);
    
    

    

    return (
        <>
            
            <ItemList products={products}/>
        </>
    )

};


export default ItemListContainer;