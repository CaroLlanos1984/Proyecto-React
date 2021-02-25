
import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';



const Cart = () => {


    const CartContextUse = useContext(CartContext)

        console.log(CartContextUse)
  
      return(
          <>
            <h3>Hola soy el cart ! </h3>
          </>
      )
  }
  
  export default Cart;
  