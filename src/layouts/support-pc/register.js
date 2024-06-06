import '../../styles/register.css'; // Asegúrate de crear un archivo App.css para los estilos
import Sidebar from '../../components/sidebar';

function Register() {
 return(
    <body>
    <div className="App">
    <Sidebar/>
  <div className="content">
    <div className='titulo'>
        <br></br><br></br>
      <h1>Registro de Computadoras</h1>
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
      <td><button className="btn"><span class="material-symbols-outlined">add</span></button></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</body>
  );
}

export default Register;