import {createContext, useEffect, useState} from 'react';


// CREO EL CONTEX
export const CartContext = createContext ();



// CREO EL PROVIDER

const CartContextProvider = ({ children }) => {

    const [ cart, setCart ] = useState ([])

    

    //AGREGO EL ITEM AL CART

    const addItem = ({ itemDetail, count }) => {
        console.log(itemDetail)
        console.log (count)

        if (isInCart (itemDetail.id) === -1){
            setCart ([...cart,{itemDetail, count}])
            alert(" The product has been added to the cart ")
        } else {
            const newCart = [...cart];
            newCart.forEach ((product => {
                if (product.itemDetail.id === itemDetail.id){
                    product.count += itemDetail.count
                }
            }))

            setCart(newCart)
        }
        localStorage.setItem( "cart", JSON. stringify ([...cart]))
        
    }

    useEffect( () => {
        if (localStorage.getItem ("cart") !== null ){
                setCart (JSON.parse (localStorage.getItem ("cart")))
        }
    }, [])

    // PARA SABER SI YA ESTA EN EL CART 

    const isInCart = (id) => {
        return cart.findIndex (prod => prod.itemDetail.id === id )
    }

    
    return (
     
        <CartContext.Provider value= {{ cart, setCart, addItem, isInCart }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
