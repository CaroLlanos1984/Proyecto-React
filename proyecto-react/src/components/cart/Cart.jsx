
import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { FaTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';


const Cart = () => {


    const CartContextUse = useContext(CartContext)
    console.log(CartContextUse)

    const {cart, setCart} = useContext (CartContext)
    console.log(cart)

    //const {total, setTotal} = useState (0)

    //const {ItemDetail, setItemDetail}

    // MOSTRAR EL CART
    //const showCart 
    //setItemDetailCard

    
    // TOTAL CART
    const cartTotal =  cart.reduce ((acc,item) => {
      return acc + (item.count * item.itemDetail.price)
    },0)
    
    console.log(cartTotal)

    // REMOVER ITEMS DEL CART
    

    // REMOVER ITEM DEL CART
    const removeItem = () => {
    }


    // VACIAR CART
    const emptyCart = () => setCart ([])

    
    // FINALIZAR COMPRA 
    const buy = () => {
      console.log (cart)
      console.log ( {items: [...cart]} )
    }
    
    
  
      return(
          <>
            <h3> CART </h3>

            {
              cart.map(item =>(
                
              <div className= " ">
                <h3>Product:{ item.itemDetail.title }</h3>
                <p>Price: $ {item.itemDetail.price } </p>
                <p>Stock: { item.itemDetail.stock } </p>
                <p>Quantity: {item.count}</p>
                <button>+</button>
                <button>-</button>
                <Link to = { ``}> <i> <FaTrashAlt/> </i> </Link>
                
              </div>
              
            ))}

            <div>
              <p>Total Cart:$ {cartTotal}</p> 
            </div>
            

            <div>
              <button onClick = {emptyCart}> Empty Cart </button>
              <button onClick= {() => { buy() }}> Checkout </button>
            </div>
            
          </>
      )
}
  
export default Cart;
  