//***IMPORTAÇÕES***
//Tailwind CSS
import "@material-tailwind/react/tailwind.css";

//Imagens
import PeopleColaborators from './components/people-colaborators/colaborators.jsx';
import mapaCinzaDaHome from './assets/imgs/mapaCinzaDaHome.svg';
import homemHome from "./assets/imgs/homemHome.png"
import whiteHeart from "./assets/imgs/whiteHeart.svg"
import coracaozinhoLaranja from "./assets/imgs/coracaozinhoLaranja.svg"
import logo from './logo.svg';
import maeBebe from '../src/assets/imgs/maeBebe.png'
// import maeBebe from '../../assets/imgs/maeBebe.png'


// Componentes
import './App.css';
import React, {useState} from 'react';
import UIButton from './components/botao-laranja/botao-laranja.js';
import Navbar from './components/navbar/navbar.jsx';
import GenericCard from './components/card/card.jsx';

const App = (props) => {
  return (
    <div>
    <img className="mapa-cinza-home" src={ mapaCinzaDaHome } />
      {/* Padding principal do respiro da tela */}
      <div className="padding-principal-tela">
      
        <Navbar></Navbar>

        <div className="div-3">
          <div className="container-principal">
            <div className="div-5">
              <div className="div-6">

              <span className="in-love-we-trust">
                <img className="coracaozinho-laranja" src={ coracaozinhoLaranja } />
                  IN LOVE WE TRUST
              </span>

                <span className="titulo-home">FAÇA O BEM <br></br> SEM OLHAR A QUEM</span>

                <span className="subtitulo-home">
                  Somos uma plataforma que visa melhorar o Brasil através de
                  doação<br></br> de roupas para aqueles que precisam.
                </span>

              </div>
              {/* <img className="img-1" src={ellipse6} /> */}
            </div>
            <div className="div-7">
              {/* <img className="img-2" src={vector29} />
              <img className="img-3" src={vector29} /> */}
              <div className="div-8">

              {/* <img className="forma-preta-home" src={formaPretaHome} /> */}
              {/* <img className="forma-laranja-home" src={vector17} /> */}

                <img className="img-poor-man-home" src={homemHome} />
              </div>
            </div>
          </div>

          <UIButton>Conhecer 
            <img className="coracaozinho-branco" src={whiteHeart} />
          </UIButton>

          <PeopleColaborators>
          # MAIS DE 1000 PESSOAS COLABORARAM COM ESSA CAUSA
          </PeopleColaborators>
        </div>
      </div>


    <section className="flex">
        <img className="w-96" src={ maeBebe } />
      <GenericCard></GenericCard>
    </section>






    </div>

    
  )
}

export default App;

