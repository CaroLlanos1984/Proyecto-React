import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom';
import ItemList from "../../components/ItemList/ItemList";
import { getFirestore } from "../../firebase";
import PropagateLoader from "react-spinners/PropagateLoader";


const CategoriesContainer = () => {


    const {categoryId} = useParams ()
    const [itemCategorie, setItemCategorie ] = useState ([]);
    const [loading,setLoading]= useState (false)

    useEffect ( () => {

         // spinner true
         setLoading (true)


          // conexion a la bd
          const dataBase = getFirestore()
    
          // guardo la ref de la coleccion 
          const itemCollection = dataBase.collection ('ITEMS')
          const CategorieItem = itemCollection.where('categoryId','==','zapatillas')


           //tomo los datos
           CategorieItem.get().then((value) => {
           
            if(value.categoryId === 'zapatillas' ){
            }
            setItemCategorie (value.docs.map(doc=> doc.data()))
            //setLoading (false)*/
        })

    },[categoryId])

    /*let aux = {...value.data(), categoryId: value.categoryId}
    console.log(aux)
    setItemCategorie(aux)*/
    
    



    return (
        <>
        {
            //if loading is true quiero q se muestre:
            loading ?

            <div className="spinner">
                <PropagateLoader
                color={"#2459E2"} 
                loading={loading}
                size={30} />
            </div>

            //si no es true:
            :
            <ItemList products={itemCategorie}/>
        }
        </>
    )
}

export default CategoriesContainer;