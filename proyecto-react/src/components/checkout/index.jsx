import './styles.css'
import { useContext , useState} from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { getFirestore } from '../../firebase';

const CheckoutComponent  = () => {

    const CartContextUse = useContext(CartContext)
    console.log(CartContextUse)
    

    const {cart, setCart} = useContext (CartContext)
    console.log(cart)

    const {setTotal} = useContext (CartContext)

    const[name, setName] = useState ('')
    const [lastname, setLastName] = useState ('')
    const[email, setEmail]= useState ('')

    // FINALIZAR COMPRA 
    const buy = async () => {
        
        let newOrder = ( {name: name, lastName: lastname, email: email, items: [...cart], total:setTotal } )

        const dataBase = getFirestore()
        const orderCollection = dataBase.collection ('ORDERS')
        orderCollection.add(newOrder)
    
    }
    console.log (cart)

    

    return (
        <>
            <div className='checkout' >

                <div className='title'>
                    <h2>Checkout</h2>
                </div>

                <div className='form' >
                    <input className='input' type='text' placeholder= 'Nombre' onChange = {(e) => {setName (e.target.value)}} />
                    <input className='input' type='text' placeholder= 'Apellido' onChange = {(e) => {setLastName (e.target.value)}} />
                    <input className='input' type='text' placeholder= 'Mail' onChange = {(e) => {setEmail (e.target.value)}} />
                </div>
            </div>
        </>
    )

}

export default CheckoutComponent