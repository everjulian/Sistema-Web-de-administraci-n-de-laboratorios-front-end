import EditBtn from "./btnEdit";
import EliminarBtn from "./buttons";
import Sidebar from "./sidebar";
function Tlistas(){
    return(
        <body>
        <div className="App">
        <Sidebar/>
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
      <td><EliminarBtn/> </td>
      <td><EditBtn/></td>
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
      <td><EliminarBtn/></td>
      <td><EditBtn/></td>
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
      <td><EliminarBtn/></td>
      <td><EditBtn/></td>
    </tr>
  </tbody>
</table>


      </div>
    </div>
        </body>
    );
}

export default Tlistas;