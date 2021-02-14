import { useState, useEffect } from "react"
import ItemDetailCard from "../../../components/ItemDetail/ItemDetailCard";
import ProductList from "../mocks/productList";
import {useParams} from 'react-router-dom';

const ItemDetailContainer = () => {

    
    const {itemId}= useParams ();
    const [itemDetail, setItemDetail] = useState ([]);

    useEffect (() => {

        
        const getItems = new Promise ((resolve, reject) => {

            setTimeout (() => {

                let itemDetailInfo = ProductList.find (product => {
                    if (product.itemId.toString () === itemId){
                        return product}  
                    }) 
                    
                    console.log(itemDetailInfo)
                

                resolve (
                   itemDetailInfo 
                    ) 
                
                
                 
            }, 2000);

            
            
        });
        getItems.then((result) => setItemDetail(result));
    
    }, [itemId]);
    

   

    return (
        <>
            <ItemDetailCard itemDetail={itemDetail} />
        </>
    )
}

export default ItemDetailContainer;