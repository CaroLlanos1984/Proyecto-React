
import ItemCount from '../../components/ItemCount';
import './styles.css';



const ItemListContainer = () => {

    const onAdd = (count) => {
      console.log (`Agregaste ${count} producto/s al carrito`) 
    }

    return (
        <>
            <ItemCount onAdd={onAdd}/>
            
        </>
    )

};



export default ItemListContainer;