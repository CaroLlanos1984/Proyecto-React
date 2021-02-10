import { useState, useEffect } from "react"
import ItemDetail from "../../../components/ItemDetail/ItemDetail";
import ProductList from "../mocks/productList";


const ItemDetailContainer = () => {

    const [products, setProducts] = useState ([]);

    useEffect (() => {

        const getItems = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (ProductList)
            }, 5000);
            
        });
        getItems.then((result) => setProducts(result)

       );
    }, []);

    return (
        <>
            <ItemDetail itemDetail={itemDetail}/>
        </>
    )
}

export default ItemDetailContainer;