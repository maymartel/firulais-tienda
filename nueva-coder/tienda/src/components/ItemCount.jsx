import React, {useState} from 'react';
import "./ItemCount.css";

function ItemCount ({stock, initial}) {
    
    const [contador, setContador] = useState(initial);

    const onRemove = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }
    }

    const onAdd = () => {
        if (stock > 0 && contador < stock) {
            setContador(contador + 1);

        } else {
            console.log("Error");
        }
    
    }

    return (
        <div className='contenedor'>
                        
            <div className='contador'>
                <p className='signosContador' onClick={onRemove}>-</p>
                <p>{contador}</p>
                <p className='signosContador' onClick={onAdd}>+</p>
            </div>
            <button className='botonCarrito'>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;