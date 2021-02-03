
import ItemCount from '../../components/ItemCount';
import './styles.css';



const ItemListContainer = () => {

    const onAdd = () => {
      console.log ("Agregaste un producto al carrito") 
    }

    return (
        <>
            <ItemCount onAdd={onAdd}/>
            
        </>
    )

};



export default ItemListContainer;