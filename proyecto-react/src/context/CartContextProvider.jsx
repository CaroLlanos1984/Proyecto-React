import {createContext, useState} from 'react';


// CREO EL CONTEX
export const CartContext = createContext ();



// CREO EL PROVIDER

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState ([])

    

    //AGREGO EL ITEM AL CART

    const addItem = (itemDetail) => {
        console.log(itemDetail)

        if (isInCart (itemDetail.itemDetail.id) === -1){
            setCart ([...cart,itemDetail])
        } else {
            const newCart = [...cart];
            newCart.forEach ((product => {
                if (product.itemDetail.id === itemDetail.itemDetail.id)
                {
                    count + 1
                }
                
            setCart(newCart)
        })

    )}

    // PARA SABER SI YA ESTA EN EL CART 

    const isInCart = (id) => {
        return cart.findIndex (prod => prod.id === id )
    }

    
    return (
     
        <CartContext.Provider value= {{ cart, setCart, addItem, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
