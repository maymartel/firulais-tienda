import React from "react";
import Item from "./Item";

function ItemList({productos}) {
    return(
        <div>
            {productos.map((producto)=> {
                return(
                    <Item item={producto}/>
                )
            })}
            
        </div>
    )
}

export default ItemList;