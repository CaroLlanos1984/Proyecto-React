import React, {useState} from 'react';
import './styles.css';



const ItemCount = ({onAdd}) =>{

    let stock= 12
    let initial = 1

    const [contador, setContador]= useState (1)
    
    const increase = (stock) => {
        
        if (contador<stock){
        setContador (contador + 1)
        }else{
            alert ("Nos quedamos sin stock =(") 
        }

    }

    const decrease = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }else{
            alert('No podes comprar menos de 1 item =)')
        }
    }

    return(

        <>
        
        <div className='contador'>
            <button onClick= {decrease} className='substract'>-</button>
            <b className='contador2'>{contador}</b>
            <button onClick= {() => {increase(stock)}} className='add'>+</button>
        </div>
        

        <div className='comprar'>
            <button onClick= {onAdd} >Add to cart</button>
        </div>
        </>
    );
};

export default ItemCount;
