import Item from "../Item/Item";
import './style.css'

const ItemList = ({products}) => {
    
    return (
        <>
            <div className='products'>
            {products.map((product) => {
                    return <Item key={product.id} product={product}/> 
                        
            })}
            </div>   
        </>
       
    )
}

export default ItemList;