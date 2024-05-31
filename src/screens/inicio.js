import '../styles/inicio.css';

import React from 'react';

const Inicio = () => {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="sidebar-header">
          <br></br>
          <h1>Hola Juan</h1>
        </div><br></br>
        <div className="sidebar-nav">
          <ul>
            <li>
              <a href="rgstcompu.js"><span class="material-symbols-outlined">add_to_queue</span> Registrar<p>Computadora</p></a>
            </li>
            <li>
              <a href="./registro.js"><span class="material-symbols-outlined">screen_search_desktop</span> Ver<p>Computadoras</p></a>
            </li>
            <li>
              <a href="#"><span class="material-symbols-outlined">info</span> Soporte<p>Computadoras</p></a>
            </li>
            <br></br><br></br>
            <li className='logout'>
              <a href="#"><span class="material-symbols-outlined">logout</span><p></p>Cerrar Sesion </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="banner"><br></br><br></br><br></br><br></br>
          <p>Nuestro sistema te ayudara a <br></br><br>
          </br>administrar los laboratorios</p>
          <button className="btn">Registrar</button>
        </div>
        <h6>Selecciona el Laboratorio</h6>
        <div className="cuadros">
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
            <br></br>
            <button>Laboratorio 1</button>
          </div>
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
          <br></br>
            <button>Laboratorio 2</button>
          </div>
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
            <br></br>
            <button>Laboratorio 3</button>
          </div>
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
            <br></br>
            <button>Laboratorio 4</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
