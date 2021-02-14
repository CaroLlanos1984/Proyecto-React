import './styles.css';
import { Link } from "react-router-dom";

const Item = ({product}) => {
    return (
        < div className= "item">
            <h3>{product.name}</h3>
            <p>Price:{product.price}</p>
            <p>Stock:{product.stock}</p>
            <Link to = {`/item/${product.id}`}> + Info </Link>
        </div>
    )
}

export default Item;