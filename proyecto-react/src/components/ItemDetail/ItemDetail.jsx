import ProductList from "../../containers/ItemListContainer/mocks/productList";


const ItemDetail = ({ItemDetail}) => {

    
    return (

        <div className= "item">
            <h3>Producto: {ProductList[2].name}</h3>
            <p>Precio: $ {ProductList[2].price}</p>
            <p>Stock: {ProductList[2].stock}</p>
        </div>
    )
          
}

export default ItemDetail;

       