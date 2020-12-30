import React from 'react';
import Item from './Item';
import mouselogitech from './media/mouselogitechg203.jpg';
import tecladohyperx from './media/tecladohyperx.jpg';
import headsetcorsair from './media/headsetcorsair.jpg';

const ItemList = ()=> {
    const [items,setItems] = React.useState([]);

    React.useEffect(()=>{
        new Promise ((resolver, rechazar) => {
            setTimeout(()=>{
                resolver([{id:1, title:"logitech g203", description:"mouse logitech", price:2, pictureUrl:"./media/mouselogitechg203.jpg"},
                {id:2, title:"hyperx alloy FPS", description:"teclado hyperx", price:5, pictureUrl:"./media/tecladohyperx.jpg"},
                {id:3, title:"corsair hs35", description:"headset corsair", price:5, pictureUrl:"./media/headsetcorsair.jpg"}])
            },2000);
        })
        .then((resultado)=>{
            setItems(resultado)
        })
    }, [])    

    return (
        <div>
            {items.length === 0 ? <p>Cargando productos</p> : null}
            {items.map((item,indice)=>{
                return <Item item={item}/>
            })}
        </div> 
    )
}

export default ItemList;