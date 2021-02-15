import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";
import ProductList from "../ItemListContainer/mocks/productList";



const CategoriesContainer = () => {


    const {categoryId} = useParams ()
    const [itemCategorie, setItemCategorie ] = useState ([]);
    
    useEffect (() => {

        

        const getItemsByCategorie = new Promise ((resolve, reject) => {

            setTimeout (() => {

                let itemsByCategorie = ProductList.filter (product => product.categoryId.toString() === categoryId);
                    

            
                console.log (getItemsByCategorie)

                resolve (itemsByCategorie)

            }, 2000);

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