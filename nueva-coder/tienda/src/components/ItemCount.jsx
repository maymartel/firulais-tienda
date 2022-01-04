import React, {useState} from 'react';
import "./ItemCount.css";

function ItemCount ({contador}) {
    

    const onRemove = () => {
        const restar = new CustomEvent("restar");
        window.dispatchEvent(restar);
    }

    const onAdd = () => {
        const agregar = new CustomEvent("agregar");
        window.dispatchEvent(agregar);
    }

    return (
        <div className='contenedor'>
                        
            <div className='contador'>
                <p className='signosContador' onClick={onRemove}>-</p>
                <p>{contador}</p>
                <p className='signosContador' onClick={onAdd}>+</p>
            </div>
        </div>
    )
}

export default ItemCount;