import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav>
            <p id="brand">PeriféricosGamer</p>
            <div id="menuDerecha">
                <ul id="menu">
                    <li className="categorias"><a href="#">Inicio</a></li>
                    <li className="categorias"><a href="#">Productos</a></li>
                    <li className="categorias"><a href="#">Sobre Nosotros</a></li>
                </ul>
                <CartWidget/>
            </div>
        </nav>
    )
}

export default NavBar;