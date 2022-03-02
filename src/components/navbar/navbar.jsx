import React from "react";
import UIButton from "../botao-laranja/botao-laranja";
import '../navbar/navbar.css'

function Navbar(props) {
    return (
        <nav className="nav">
               
        <a href="#" className="nav__brand">
            T-VESTE
        </a>
               
        <ul className="nav__menu">
            <li className="nav__item">
                    <a href="#" className="nav__link">
                        HOME
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        SOBRE NÓS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        CAMPANHAS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        DEPOIMENTOS
                    </a>
                </li>
                
                <li className="nav__item">
                    <a href="#" className="nav__link">
                        <button>DEPOIMENTOS</button>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#" className="nav__link">
                    <button>DEPOIMENTOS</button>
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;