
import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { FaTrashAlt} from "react-icons/fa";
import { Link } from 'react-router-dom';
import './styles.css'


const Cart = () => {


    const CartContextUse = useContext(CartContext)
    console.log(CartContextUse)

    const {cart, setCart} = useContext (CartContext)
    console.log(cart)
    
    // TOTAL CART
    const cartTotal =  cart.reduce ((acc,item) => {
      return acc + (item.count * item.itemDetail.price)
    },0)
    
    
    console.log(cartTotal)

    // REMOVER ITEMS DEL CART
    

    // REMOVER ITEM DEL CART
    const removeItem = (item) => {
       cart.filter (
         (cart) => item.itemDetail.id === item.id
       )

    } //setCart([...cart])


    // VACIAR CART
    const emptyCart = () => setCart ([])

    
    // FINALIZAR COMPRA 
    /*const buy = () => {
      console.log (cart)
      console.log ( {name: name, email: email, items: [...cart], total: cartTotal} )
    }*/
    
    
  
      return(
        <>
          <div className="cart">

            <div className="title">
            <h3> Your Cart </h3>
            </div>

            {
              cart.map(item =>(
                
              <div className= "cartItemDetail">
                <h3>{ item.itemDetail.title }</h3>
                <p>Price: $ {item.itemDetail.price } </p>
                <p>Stock: { item.itemDetail.stock } </p>
                <p>Quantity: {item.count}</p>
                <button>+</button> <button>-</button>
                <div onClick= {() => {removeItem (item.id)}}> <i className='trash'> <FaTrashAlt/> </i> </div>
              </div>
              
            ))}
          
          </div>

          <div className='endCart'>

            <div className='totalCart'>
              <p>TOTAL CART: ${cartTotal}</p> 
            </div>

            <div className='checkout'>
              <Link to = {`/checkout`} > <button className='checkoutBtn'> Checkout </button> </Link> 
            </div>
            
            <div className='emptyCart'>
              <button className='emptyCartBtn' onClick = {emptyCart}> Empty Cart </button>
            </div>

        
          </div>

        </> 
      )
}
  
export default Cart;
  