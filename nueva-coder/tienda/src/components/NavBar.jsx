import React from "react"; //lo necesitas para todos los componentes
import Logo from "../media/iconos/logoHeader2.png";
import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom";

function NavBar() { 
    //todo lo que sea logica js va antes del return
    return ( //aca va todo lo que se renderiza "html", tiene ser una etiqueta solamente
        <nav>
            <NavLink to="/">
                <img src={Logo} alt="logo" className="logo"/>
            </NavLink>
            <ul className="secciones">
                <NavLink to="/category/juguetes">
                    Juguetes
                </NavLink>
                <NavLink to="/category/accesorios">
                    Accesorios
                </NavLink>
            </ul>

            <CartWidget/>
            
        </nav>
    )
}

export default NavBar; //se necesita exportar para que otros componentes lo puedan usar