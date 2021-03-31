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
                    product.count += count
                }
            }))

            setCart(newCart)
        }
        //localStorage.setItem( "cart", JSON.stringify ([...cart]))
        
    }

    useEffect( () => {
        if (localStorage.getItem ("cart") !== null ){
                setCart (JSON.parse (localStorage.getItem ("cart")))
        }
    }, [])

   useEffect (() => {
        localStorage.setItem ("cart", JSON.stringify (cart))
    }, [cart])


    // PARA SABER SI YA ESTA EN EL CART 

    const isInCart = (id) => {
        return cart.findIndex (prod => prod.itemDetail.id === id )
    }


    // PARA SUMAR AL CARTWIDGET DEL CART 

    const getTotalItems = cart.reduce (( acc, item) => {
        return acc + item.count 
    },0)
    
    console.log (getTotalItems)

    // TOTAL CART
    const cartTotal =  cart.reduce ((acc,item) => {
      return acc + (item.count * item.itemDetail.price)
    },0)
    
    console.log(cartTotal)
    

    return (
     
        <CartContext.Provider value= {{ cart, setCart, addItem, isInCart, getTotalItems, cartTotal }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;
