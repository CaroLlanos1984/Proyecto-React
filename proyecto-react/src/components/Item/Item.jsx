import './styles.css';

const Item = ({product}) => {
    return (
        < div className= "item">
            <h3>{product.name}</h3>
            <p>Price:{product.price}</p>
            <p>Stock:{product.stock}</p>
        </div>
    )
}

export default Item;