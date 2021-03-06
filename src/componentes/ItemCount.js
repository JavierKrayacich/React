import React from 'react';
import './ItemCount.css';

const ItemCount = ({initial,onAdd,onSubstract}) => {
   
    return (
        <div id="itemCount">
            <p>Mouse Logitech G203</p>
            <div id="seleccionCant">
                <button onClick={onSubstract} className="controles">-</button>
                <p>{initial}</p>
                <button onClick={onAdd} className="controles">+</button>
            </div>
            <button id="agregar">Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;