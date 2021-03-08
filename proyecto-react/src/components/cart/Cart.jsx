
import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';



const Cart = () => {


    const CartContextUse = useContext(CartContext)

    const {cart, setCart} = useContext (CartContext)

    console.log(CartContextUse)

    // TOTAL CART
    const cartTotal =  () => {

    }

    // FINALIZAR COMPRA 
    const buy = () => {
      console.log (cart)
      console.log ( {items: [...cart]} )
    }
    
  
      return(
          <>
            <h3> CART </h3>

            <div>

            </div>

            <div>
              <button> Empty Cart </button>
              <button onClick= {() => { buy() }}> Checkout </button>
            </div>

          </>
      )
}
  
export default Cart;
  