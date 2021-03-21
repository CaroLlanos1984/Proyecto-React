import { useContext } from'react'
import { CartContext } from '../../context/CartContextProvider'
import ItemCount from "../ItemCount"
import './style.css'

const ItemDetailCard = ({itemDetail}) => {

    const { addItem } = useContext(CartContext)

    const onAdd = (count) => {
      console.log (`Agregaste ${count} producto/s al carrito`) 
      addItem ({itemDetail, count})
      //console.log (count)
    }
    

    return (

       <div className= "item">
            <h3>{itemDetail.title}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas est cum autem atque sint 
            eius amet sit error illo adipisci, dicta aut deleniti commodi alias cupiditate numquam nisi 
            corrupti non.</p>
            <p>Price: $ {itemDetail.price} </p>
            <p>Stock: {itemDetail.stock} </p>
            <ItemCount onAdd={onAdd}/>
       </div>
    
    )
        
}

export default ItemDetailCard;

