//***IMPORTAÇÕES***
//Tailwind CSS
import "@material-tailwind/react/tailwind.css";

//Imagens
import mapaCinzaDaHome from './assets/imgs/mapaCinzaDaHome.svg';
import homemHome from "./assets/imgs/homemHome.png"
import whiteHeart from "./assets/imgs/whiteHeart.svg"
import coracaozinhoLaranja from "./assets/imgs/coracaozinhoLaranja.svg"
import maeBebe from '../src/assets/imgs/maeBebe.png'
// import mapaColorido from '../src/assets/imgs/mapaColorido.png'

// Componentes
import './App.css';
import React, { useState } from 'react';
import UIButton from './components/botao-laranja/botao-laranja.js';
import Navbar from './components/navbar/navbar.jsx';
import GenericCard from './components/card/card.jsx';
import CardsCampanha from "./components/passoapassocamp/dumb-card.jsx";
import CardsDoar from "./components/passoapassoanuncio/usuariodoar.jsx";
import Carousel from '../src/components/carrosselcampanhas/carrossel.jsx';
import Depoimentos from "./components/testimonials/testimonials.jsx";
import PeopleColaborators from "./components/people-colaborators/colaborators.jsx";

const App = (props) => {
  return (
    <div>
      <img className="mapa-cinza-home" src={mapaCinzaDaHome} />

      {/* Padding principal do respiro da tela */}
      <div className="padding-principal-tela">
        <Navbar></Navbar>
        {/* Container principal da tela */}
        <div className="div-3">
          <div className="container-principal">
            <div className="div-5">
              <span className="in-love-we-trust">
                <img className="coracaozinho-laranja text-md sm:text-4md" src={coracaozinhoLaranja} />
                IN LOVE WE TRUST
              </span>

              <span className="titulo-home text-xl md:text-4xl">FAÇA O BEM <br></br> SEM OLHAR A QUEM</span>

              <span className="subtitulo-home my-8">
                Somos uma plataforma que visa melhorar o Brasil através de
                doação<br></br> de roupas para aqueles que precisam.
              </span>

            <div>
              <UIButton>Conhecer
                <img className="coracaozinho-branco" src={whiteHeart} />
              </UIButton>
            </div>

            <div className="py-32">
              <PeopleColaborators>
                # MAIS DE 1000 PESSOAS COLABORARAM COM ESSA CAUSA
              </PeopleColaborators>
            </div>

            </div>

            <div className="div-7">
              <div className="div-8">

                <img className="img-poor-man-home" src={homemHome} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parte sobre nós (com foto da mae e bebe) */}
      <section className="flex">
        <img className="w-96" src={maeBebe} />
        <GenericCard></GenericCard>
      </section>

      {/* Passo a passo de como doar */}
      <section className="passos-donation h-full padding-principal-tela">
        <span className="titulo-home">VOCÊ PODE ESCOLHER COMO QUER DOAR!</span>
        <h5 className="text-lime-600 text-3xl	font-bold my-8">CRIAR ANÚNCIO DE DOAÇÃO</h5>
        <CardsCampanha></CardsCampanha>
        <h5 className="text-orange-600 text-3xl	font-bold my-8">DOAR EM CAMPANHA</h5>
        <CardsDoar></CardsDoar>
      </section>

      {/* <section className="h-screen my-8 padding-principal-tela ">
    <Carousel></Carousel>
    </section> */}

      {/* <section className=" h-screen padding-principal-tela"> */}
      <Depoimentos></Depoimentos>
      {/* </section> */}

    </div>


  )
}

export default App;

