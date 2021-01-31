import './styles.css';

const ItemCount = ({stock, onAdd, contador, onSubstract}) =>{
    return(
        <>

        <div className='contador'>
            <button onClick= {onSubstract} className='substract'>-</button>
            <b className='contador2'>{contador}</b>
            <button onClick= {() => {onAdd(stock)}} className='add'>+</button>
        </div>

        <div className='comprar'>
            <button>Comprar</button>
        </div>
        </>
    );
};

export default ItemCount;