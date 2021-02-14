import { useState, useEffect } from "react"
import ItemDetailCard from "../../components/ItemDetail/ItemDetailCard";
import ProductList from "../ItemListContainer/mocks/productList"
import {useParams} from 'react-router-dom';


const CategoriesContainer = () => {


    const {categoryId} = useParams ()
    const [itemCategorie, setItemCategorie ] = useState ([]);
    
    useEffect (() => {

        

        const getItemsByCategorie = new Promise ((resolve, reject) => {

            let itemsByCategorie = ProductList.find (product => product.categoryId=== categoryId)
            
            console.log (getItemsByCategorie)

            resolve (itemsByCategorie)
        })

    

        getItemsByCategorie.then ((result) => setItemCategorie (result));

    }, [categoryId]);


    return (
        <>
            <ItemDetailCard itemCategorie={itemCategorie}/>
        </>
    )
}

export default CategoriesContainer;