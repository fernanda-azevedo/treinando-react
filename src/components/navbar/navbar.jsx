import React from "react";
import '../navbar/navbar.css';
import logoTveste from '../../assets/imgs/logoTveste.svg'

function Navbar(props) {
    return (
        <nav className="nav">
               
        <a href="_blank" className="nav__brand">
        <img className="logo-tveste" src={logoTveste.svg} />
            T-VESTE
        </a>
               
        <ul className="nav__menu">
            <li className="nav__item">
                    <a href="_blank" className="nav__link">
                        HOME
                    </a>
                </li>
                <li className="nav__item">
                    <a href="_blank" className="nav__link">
                        SOBRE NÓS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="_blank" className="nav__link">
                        CAMPANHAS
                    </a>
                </li>
                <li className="nav__item">
                    <a href="_blank" className="nav__link">
                        DEPOIMENTOS
                    </a>
                </li>
                
                <li className="nav__item">
                    <a href="_blank" className="nav__link">
                        <button>Cadastro</button>
                    </a>
                </li>

                <li className="nav__item">
                    <a href="_blank" className="nav__link">
                    <button>Login</button>
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;