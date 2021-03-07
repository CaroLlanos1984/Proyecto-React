import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { getFirestore } from '../../firebase';
//import ProductList from './mocks/productList';
import './styles.css';


const ItemListContainer = () => {

    const [products,setProducts]= useState ([]);
   

    /*useEffect (() => {

        const promise = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (ProductList)
            }, 2000);
            
        });
        promise.then((result) => setProducts(result));
    }, []);*/
    
    useEffect ( () => {
        // conexion a la bd
        const dataBase = getFirestore()

        // guardo la ref de la coleccion 
        const itemCollection = dataBase.collection ('ITEMS')
        
        //tomo los datos
        itemCollection.get().then((value) => {
        
            let aux = value.docs.map(element =>{ 
                return {...element.data(), id:element.id} 
            })
            console.log(aux)
            setProducts(aux)

        })
    }, [])

    

    return (
        <>
            <ItemList products={products}/>
        </>
    )

};


export default ItemListContainer;