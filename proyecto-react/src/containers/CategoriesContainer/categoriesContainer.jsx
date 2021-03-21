import { useState, useEffect } from "react"
//import {useParams} from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore } from "../../firebase";


const CategoriesContainer = () => {


    //const {categoryd} = useParams ()
    const [itemCategorie, setItemCategorie ] = useState ([]);

    useEffect ( () => {


          // conexion a la bd
          const dataBase = getFirestore()
    
          // guardo la ref de la coleccion 
          const itemCollection = dataBase.collection ('ITEMS')
          const CategorieItem = itemCollection.where('categoryId')


           //tomo los datos
           CategorieItem.get().then((value) => {
            let aux = {...value.data(), categoryId: value.categoryId}
            console.log(aux)
            setItemCategorie(aux)
            //setLoading (false)*/
            
            

        })

    },[categoryId])
    


   /* useEffect (() => {

        

        //const getItemsByCategorie = new Promise ((resolve, reject) => {

            //setTimeout (() => {

                let itemsByCategorie = ProductList.filter (product => product.categoryId.toString() === categoryId);
                    

            
                console.log (getItemsByCategorie)

                resolve (itemsByCategorie)

            //}, 2000);

        })

    

        getItemsByCategorie.then ((result) => setItemCategorie (result));

    }, [categoryId]);*/


    return (
        <>
            <ItemList products={itemCategorie}/>
            
        </>
    )
}

export default CategoriesContainer;