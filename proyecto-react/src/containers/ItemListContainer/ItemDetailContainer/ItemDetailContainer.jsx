import { useState, useEffect } from "react"
import ItemDetail from "../../../components/ItemDetail/ItemDetail";
import ProductList from "../mocks/productList";


const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState ([]);

    useEffect (() => {

        const getItems = new Promise ((resolve, reject) => {
            setTimeout (() => {
                resolve (ProductList[2])
            }, 5000);
            
        });
        getItems.then((result) => setItemDetail(result));
        


    }, []);

    return (
        <>
            <ItemDetail itemDetail={itemDetail}/>
        </>
    )
}

export default ItemDetailContainer;