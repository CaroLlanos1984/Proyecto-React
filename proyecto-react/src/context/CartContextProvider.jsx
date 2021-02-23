import {createContext, useState} from 'react';

// CREO EL CONTEX
export const CartContext = createContext ();



// CREO EL PROVIDER
const CartContextProvider = ({children}) => {
    const [product, setProduct] = useState([])

    const addItem = (itemDetail) => {
        if (isInCart (itemDetail.itemDetail.id) === -1){
            setProduct (itemDetail)
        } else{
                        
            }   
    }

    const isInCart = (id) => {
        return product.findIndex (prod => prod.id === id )
    }
    
    return (
     
        <CartContext.Provider value= {{
            product,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
