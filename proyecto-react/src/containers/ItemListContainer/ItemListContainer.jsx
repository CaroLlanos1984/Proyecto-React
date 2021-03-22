import { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import { getFirestore } from '../../firebase';
import './styles.css';
import PropagateLoader from "react-spinners/PropagateLoader";


const ItemListContainer = () => {

    const [products,setProducts]= useState ([]);
    const [loading,setLoading]= useState (false)

    
    useEffect ( () => {

        setLoading (true)
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
            setLoading (false)

        })
    }, [])

    

    return (
        <>
            {
            
                loading ?
                <div className="spinner">
                <PropagateLoader
                color={"#2459E2"} 
                loading={loading}
                size={30} />
                </div>

                :
                
                <ItemList products={products}/>
                
            }
        </>
    )

};


export default ItemListContainer;