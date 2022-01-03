import React, {useState, useEffect} from "react";
import Item from "./Item";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import productos from "./productos.json";
import { useParams } from "react-router-dom";

function ItemListContainer () {
   
    const {id} = useParams();
    
    const [state, setState] = useState([]);

    let categoria = []

    const traerCategoria = (id) => {
        switch(id) {
            case "juguetes": 
                categoria = productos.filter(producto => producto.category === "juguetes")
                break;
            
            case "accesorios":
                categoria = productos.filter(producto => producto.category === "accesorios")
                break;

            default: 
                categoria = productos;
                break;
        }
    }



    useEffect(() => {
        const arrayProductos = new Promise((resolve, reject) => {
            setTimeout(() => {
                traerCategoria(id);
                setState(categoria);
                resolve(true);
                
            }, 2000);
        })
    })

    console.log(state);

   

    return (
        <div>
           <ItemList productos={state}/>
        </div>
    )
}

export default ItemListContainer;