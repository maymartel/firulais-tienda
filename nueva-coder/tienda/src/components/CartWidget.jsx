import React from "react";
import Carrito from "../media/iconos/carrito.png";

function CartWidget () {
    return (
        <div className="carrito">
            <img src={Carrito} alt="" className="fotoCarrito" />
            <p>2</p>
        </div>
    )
}

export default CartWidget;