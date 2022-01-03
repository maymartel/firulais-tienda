import react from "react";
import { NavLink } from "react-router-dom";
import "./Item.css"

function Item ({item}) {
    return (
        <div className="tarjeta">
            <p>{item.title}</p>
            <img src={item.imageUrl} alt="" className="imagenProducto" />
            <p>{item.price}</p>
            <NavLink to= {`/item/${item.id}`}>
                <button>Detalle del producto</button>
            </NavLink>
        </div>
    )
}

export default Item;