import { useState, useEffect } from "react"
import ItemDetailCard from "../../../components/ItemDetail/ItemDetailCard";
import {useParams} from 'react-router-dom';
import { getFirestore } from "../../../firebase";


const ItemDetailContainer = () => {

    
    const {itemId}= useParams ();
    const [itemDetail, setItemDetail] = useState ([]);

   

        useEffect ( () => {
            // conexion a la bd
            const dataBase = getFirestore()
            
    
            // guardo la ref de la coleccion 
            const itemCollection = dataBase.collection ('ITEMS')
            const item = itemCollection.doc(itemId)
            
            //tomo los datos
            item.get().then((value) => {
            
                let aux = {...value.data(), id: value.id}
                console.log(aux)
                setItemDetail(aux)
    
            })
        }, [itemId])
    

        
        /*const getItems = new Promise ((resolve, reject) => {

            setTimeout (() => {

                let itemDetailInfo = ProductList.find(product => product.itemId.toString() === itemId) 
                
                           
                console.log(itemDetailInfo)
                

                resolve (
                   itemDetailInfo 
                ) 
                
                
                 
            }, 2000);

            
            
        });
        getItems.then((result) => setItemDetail(result));*/
    
    
    

   

    return (
        <>
            <ItemDetailCard itemDetail={itemDetail} />
        </>
    )
}

export default ItemDetailContainer;