
const ItemDetailCard = ({itemDetail}) => {

    

    return (

       <div className= "item">
            <h3>Product: {itemDetail.name}</h3>
            <p>Price: $ {itemDetail.price} </p>
            <p>Stock: {itemDetail.stock} </p>
       </div>
    )
          
}

export default ItemDetailCard;

