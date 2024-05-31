import '../styles/estado.css';

import React from 'react';

const Estado = () => {
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
              <a href=""><span class="material-symbols-outlined">add_to_queue</span> Registrar<p>Computadora</p></a>
            </li>
            <li>
              <a href="#"><span class="material-symbols-outlined">screen_search_desktop</span> Ver<p>Computadoras</p></a>
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
        <div className='titulo'>
          <h1>Estado de las Computadoras</h1>
          <h5><span class="material-symbols-outlined">info</span> Si el problema fue solucionado, presione el botón</h5>
        </div>
        <div className="cuadros">
            <div class="div1"> 
            <h5>Laboratorio 1</h5>
                <img src='img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div2"> 
            <h5>Laboratorio 1</h5>
                <img src='img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div3"> 
            <h5>Laboratorio 1</h5>
                <img src='img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div4"> 
            <h5>Laboratorio 1</h5>
                <img src='img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div5"> 
            <h5>Laboratorio 1</h5>
                <img src='img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div6"> 
            <h5>Laboratorio 1</h5>
            <img src='img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn"><span class="material-symbols-outlined">verified</span></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Estado;
