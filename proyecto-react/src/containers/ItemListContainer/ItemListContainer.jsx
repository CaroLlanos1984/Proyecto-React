
import { useEffect, useState } from 'react';
import ItemCount from '../../components/ItemCount';
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
    
    

    const onAdd = (count) => {
      console.log (`Agregaste ${count} producto/s al carrito`) 
    }

    return (
        <>
            <ItemCount onAdd={onAdd}/>
            <ItemList products={products}/>
            
        </>
    )

};



export default ItemListContainer;