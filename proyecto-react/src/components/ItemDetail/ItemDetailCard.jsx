import { useContext } from'react'
import { CartContext } from '../../context/CartContextProvider';
import ItemCount from "../ItemCount";

const ItemDetailCard = ({itemDetail}) => {

    const { addItem } = useContext(CartContext)

    const onAdd = (count) => {
      console.log (`Agregaste ${count} producto/s al carrito`) 
      addItem ({itemDetail, count})
    }
    

    return (

       <div className= "item">
            <h3>Product: {itemDetail.name}</h3>
            <p>Price: $ {itemDetail.price} </p>
            <p>Stock: {itemDetail.stock} </p>
            <ItemCount onAdd={onAdd}/>
       </div>
    
    )
        
}

export default ItemDetailCard;

