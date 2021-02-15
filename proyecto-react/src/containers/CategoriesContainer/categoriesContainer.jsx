import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";



const CategoriesContainer = () => {


    const {categoryId} = useParams ()
    const [itemCategorie, setItemCategorie ] = useState ([]);
    
    useEffect (() => {

        const getItemsByCategorie = new Promise ((resolve, reject) => {

            let itemsByCategorie = ItemList.filter (product => product.categoryId.toString() === categoryId);
                    
            
        
            
            console.log (getItemsByCategorie)

            resolve (itemsByCategorie)
        })

    

        getItemsByCategorie.then ((result) => setItemCategorie (result));

    }, [categoryId]);


    return (
        <>
            <ItemList products={itemCategorie}/>
            
        </>
    )
}

export default CategoriesContainer;