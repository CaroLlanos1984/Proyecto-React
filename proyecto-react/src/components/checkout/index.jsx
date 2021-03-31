import './styles.css'
import { useContext , useState} from 'react';
import { CartContext } from '../../context/CartContextProvider';
import { getFirestore } from '../../firebase';

const CheckoutComponent  = () => {

    const CartContextUse = useContext(CartContext)
    console.log(CartContextUse)
    

    const {cart} = useContext (CartContext)
    //console.log(cart)

    const {cartTotal} = useContext (CartContext)

    const[name, setName] = useState ('')
    const [lastname, setLastName] = useState ('')
    const[email, setEmail]= useState ('')
    const [phone,setPhone]= useState ('')

    // FINALIZAR COMPRA 
    const buy = async () => {

        
        let newOrder = ( {buyer: {name: name, lastName: lastname, email: email, phone: phone}, items: [...cart], total: cartTotal } )

        const dataBase = getFirestore()
        const ordersCollection = dataBase.collection ('orders')
        ordersCollection.add(newOrder).then ((value) => {
            console.log(value)
        })
    
    }

    //console.log (cart)
    console.log (
       { buyer: {name: name,lastName: lastname, email: email, phone: phone }, items: [...cart], total: cartTotal}
    )

    

    return (
        <>
            <div className='checkout' >

                <div className='title'>
                    <h2>Checkout</h2>
                </div>

                <div className='form' >
                    <input className='input' type='text' placeholder= 'Nombre' onChange = {(e) => {setName (e.target.value)}} />
                    <input className='input' type='text' placeholder= 'Apellido' onChange = {(e) => {setLastName (e.target.value)}} />
                    <input className='input' type='text' placeholder= 'Phone' onChange = {(e) => {setPhone (e.target.value)}} />
                    <input className='input' type='text' placeholder= 'Mail' onChange = {(e) => {setEmail (e.target.value)}} />
                </div>

                <div>
                    <button className='buyBtn' onClick ={buy} > Buy </button>
                </div>
            </div>

            
        </>
    )

}

export default CheckoutComponent