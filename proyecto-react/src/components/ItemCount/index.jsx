import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



const ItemCount = ({onAdd}) =>{

    let stock= 12
    let initial = 1

    const [count, setCount]= useState (1)
    
    const increase = (stock) => {
        
        if (count<stock){
        setCount (count + 1)
        }else{
            alert ("Nos quedamos sin stock =(") 
        }

    }

    const decrease = () => {
        if (count > initial) {
            setCount(count - 1);
        }else{
            alert('No podes comprar menos de 1 item =)')
        }
    }



    return(

        <>
        
        <div className='contador'>

            <button onClick= {decrease} className='substract'>-</button>
            <b className='contador2'>{count}</b>
            <button onClick= {() => {increase(stock)}} className='add'>+</button>
        
        </div>
        

        <div className='comprar'>
            <Link to= {`/cart`}> <button className= 'addToCart' onClick= {()=>onAdd(count)} > Add to cart </button> </Link>
        </div>

        

        </>
    );
};

export default ItemCount;
