import { useState, useEffect } from "react"
import ItemDetailCard from "../../../components/ItemDetail/ItemDetailCard";
import {useParams} from 'react-router-dom';
import { getFirestore } from "../../../firebase";
import PropagateLoader from "react-spinners/PropagateLoader";
import './style.css'

const ItemDetailContainer = () => {

    
    const {itemId}= useParams ();
    const [itemDetail, setItemDetail] = useState ([]);
    const [loading,setLoading]= useState (false)


        useEffect ( () => {

            // spinner true
            setLoading (true)

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
                setLoading (false)
    
            })
        }, [itemId])
    
   

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
                
                <div className='itemdetail'>
                <ItemDetailCard itemDetail={itemDetail} />
                </div>
            
            }    
        </>
    )
}

export default ItemDetailContainer;