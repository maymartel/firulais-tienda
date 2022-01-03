import React, {useEffect, useState} from "react";
import productos from "./productos.json";
import ItemDetail from "./ItemDetail";
import {useParams} from "react-router-dom";

function ItemDetailContainer () {

    const {id} = useParams(); 

    const [state, setState] = useState([]);

    let producto = [];

    const traeProducto = (id) => {
        producto = productos.find(item => item.id === parseInt(id));
    }

    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() =>{
                traeProducto(id);
                setState(producto);
                resolve(true);
            },2000)
        })
    })



    return(
        <div>
            <ItemDetail item={state}/>
            
        </div>
        
    )
}

export default ItemDetailContainer;