
import { useContext } from 'react';
import { CartContext } from '../../context/CartContextProvider';
//import ItemDetailCard from '../ItemDetail/ItemDetailCard';




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

            {
              cart.map(itemDetail =>(
                
              <div className= " ">
                <h3>Product:{ itemDetail.title }</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas est cum autem atque sint 
                eius amet sit error illo adipisci, dicta aut deleniti commodi alias cupiditate numquam nisi 
                corrupti non.</p>
                <p>Price: $ {itemDetail.price } </p>
                <p>Stock: { itemDetail.stock } </p>
                <button>+</button>
                <button>-</button>

              </div>
              
            ))}
            

            <div>
              <button> Empty Cart </button>
              <button onClick= {() => { buy() }}> Checkout </button>
            </div>
            
          </>
      )
}
  
export default Cart;
  