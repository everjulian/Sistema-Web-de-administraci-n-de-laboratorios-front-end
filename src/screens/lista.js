import '../styles/lista.css';

import React from 'react';

const Lista = () => {
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
          <h1>Listado de Computadoras</h1>
          <h5><span class="material-symbols-outlined">tune</span> Filtro</h5>
        </div>
        <table class="filtroTable">
  <thead>
    <tr>
      <th>Codigo de activo</th>
      <th>Marca</th>
      <th>Estado</th>
      <th>Clase de activo</th>
      <th>Descripcion</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
      <td><input></input></td>
      <td><button className="btn"><span class="material-symbols-outlined">search</span></button></td>
    </tr>
  </tbody>
</table>
<table class="listaTable">
  <thead>
    <tr>
      <th></th>
      <th>Codigo de activo</th>
      <th>Marca</th>
      <th>Estado</th>
      <th>Clase de activo</th>
      <th>Descripcion</th>
      <th>Eliminar</th>
      <th>Editar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >
      <label class="control control-checkbox">
            <input type="checkbox" />
        <div class="control_indicator"></div>
    </label>
      </td>
      <td>Row 1, Cell 2</td>
      <td>Row 1, Cell 3</td>
      <td>Row 1, Cell 4</td>
      <td>Row 1, Cell 5</td>
      <td>Row 1, Cell 6</td>
      <td><button className="deleteButton"><span class="material-symbols-outlined">delete</span></button></td>
      <td><button className="editButton"><span class="material-symbols-outlined">
edit
</span></button></td>
    </tr>
    <tr>
      <td>
      <label class="control control-checkbox">
            <input type="checkbox" />
        <div class="control_indicator"></div>
    </label>
      </td>
      <td>Row 2, Cell 2</td>
      <td>Row 2, Cell 3</td>
      <td>Row 2, Cell 4</td>
      <td>Row 2, Cell 5</td>
      <td>Row 2, Cell 6</td>
      <td><button className="deleteButton"><span class="material-symbols-outlined">delete</span></button></td>
      <td><button className="editButton"><span class="material-symbols-outlined">edit</span></button></td>
    </tr>
    <tr>
      <td>
      <label class="control control-checkbox">
            <input type="checkbox" />
        <div class="control_indicator"></div>
    </label>
      </td>
      <td>Row 3, Cell 2</td>
      <td>Row 3, Cell 3</td>
      <td>Row 3, Cell 4</td>
      <td>Row 3, Cell 5</td>
      <td>Row 3, Cell 6</td>
      <td><button className="deleteButton"><span class="material-symbols-outlined">delete</span></button></td>
      <td><button className="editButton"><span class="material-symbols-outlined">edit</span></button></td>
    </tr>
  </tbody>
</table>


      </div>
    </div>
  );
};

export default Lista;
