import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import UIButton from './components/botao-laranja/botao-laranja.js';
// import ellipse2 from "./assets/imgs/imgss/ellipse2.png"
// import ellipse3 from "./assets/imgs/imgss/ellipse3.png"
// import ellipse4 from "./assets/imgs/imgss/ellipse4.png"
// import ellipse5 from "./assets/imgs/imgss/ellipse5.png"
import ellipse6 from "./assets/imgs/imgss/ellipse6.png"
// import group from "./assets/imgs/imgss/group.svg"
import mapaCinzaDaHome from './assets/imgs/imgss/mapaCinzaDaHome.svg';
// import rectangle320 from "./assets/imgs/imgss/vector320.svg"
// import vector321 from "./assets/imgs/imgss/vector321.svg"
// import vector322 from "./assets/imgs/imgss/vector322.svg"

// import vector30 from "./assets/imgs/imgss/vector30.svg"
import vector29 from "./assets/imgs/imgss/vector29.svg"
import vector17 from "./assets/imgs/imgss/vector17.svg"

import meninaHome from "./assets/imgs/imgss/meninaHome.svg"
import detalhesImgMenina from "./assets/imgs/imgss/detalhesImgMenina.png"

import vector31 from "./assets/imgs/imgss/vector31.svg"
import formaPretaHome from "./assets/imgs/imgss/formaPretaHome.svg"
import vector37 from "./assets/imgs/imgss/vector37.svg"
// import vector39 from "./assets/imgs/imgss/vector39.svg"
import vector47 from "./assets/imgs/imgss/vector47.svg"

import whiteHeart from "./assets/imgs/imgss/whiteHeart.svg"
import coracaozinhoLaranja from "./assets/imgs/imgss/coracaozinhoLaranja.svg"
import vector472 from "./assets/imgs/imgss/vector472.svg"
import vector473 from "./assets/imgs/imgss/vector473.svg"

const App = (props) => {
  return (

    <div>
      {/* <div style={{ backgroundImage: `url(./assets/imgs/imgss/mapaCinzaDaHome.svg")` }}></div> */}
    <img className="mapa-cinza-home" src={ mapaCinzaDaHome } />
      {/* Padding principal do respiro da tela */}
      <div className="padding-principal-tela">
        <span className="span-1">DEPOIMENTOS</span>
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
              <img className="img-1" src={ellipse6} />
            </div>
            <div className="div-7">
              <img className="img-2" src={vector29} />
              <img className="img-3" src={vector29} />
              <div className="div-8">

              <img className="forma-preta-home" src={formaPretaHome} />
              <img className="forma-laranja-home" src={vector17} />

                <img className="img-menina-home" src={meninaHome} />
              <img className="detalhes-menina-home" src={detalhesImgMenina} />
                <span className="span-5">2022</span>
              </div>
            </div>
          </div>
          <img className="img-5" src={vector31} />
       
          <div className="div-10">
            <img className="img-11" src={vector37} />
          </div>

          <UIButton>Conhecer 
            <img className="coracaozinho-branco" src={whiteHeart} />
          </UIButton>


          {/* <div className="div-10">
            <img className="img-11" src={vector38} />
            <img className="img-14" src={vector39} />
          </div> */}
          {/* <img className="img-15" src={vector41} /> */}
        </div>
      </div>
    </div>
  )
}

export default App;

