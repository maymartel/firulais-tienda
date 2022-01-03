import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({item}) {

    return(
        <div className="tarjetaDescripcion">
            <p>{item.title}</p>
            <img src={item.imageUrl} alt="" className="imagenProducto"/>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} initial={0}/>
        </div>
    )
}

export default ItemDetail;