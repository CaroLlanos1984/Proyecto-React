import React, {useState} from 'react';
import ItemCount from '../../components/ItemCount';
import './styles.css';

{/*const ItemListContainer = ({greeting}) => {
    return(

        <h1 className= "greeting">{greeting}</h1>
    )
}*/}

const ItemListContainer = (props) => {

    /*hook*/
    const [contador, setContador]= useState (1)

    const onAdd = (stock) => {

        if (contador < stock) {
            setContador( contador + 1);
        }else{
            alert ("Nos quedamos sin stock =(")
            console.log ("no hay stock")
        }
    }

    const onSubstract = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }else{
            alert('No podes comprar menos de 1 item =)')
        }
    }

    return (
        <>
            <ItemCount stock= {12} contador={contador} onSubstract={onSubstract} onAdd={onAdd}/>
            
        </>
    )
}



export default ItemListContainer;