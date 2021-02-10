const ItemDetail = ({products}) => {

    
    return (
        
        < div>
             <h3>{products.name}</h3>
            <p>Price:{products.price}</p>
            <p>Stock:{products.stock}</p>
        </div>
    )
    
        
}

export default ItemDetail;

