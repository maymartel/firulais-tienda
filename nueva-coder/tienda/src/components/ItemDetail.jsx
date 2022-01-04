import ItemCount from "./ItemCount";
import React, {useState} from "react";
import { NavLink } from "react-router-dom";

function ItemDetail({item}) {

    const [contador, setContador] = useState(0);

    window.addEventListener("agregar", () => {
        setContador(contador +1)
    })

    window.addEventListener("restar", () => {
        setContador(contador -1)
    })

    return(
        <div className="tarjetaDescripcion">
            <p>{item.title}</p>
            <img src={item.imageUrl} alt="" className="imagenProducto"/>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} contador={contador} />
            <NavLink to="/cart">
            <button>Agregar al carrito</button>
            </NavLink>
        </div>
    )
}

export default ItemDetail;