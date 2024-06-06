import '../components/css/sidebar.css'
import { Outlet, Link  } from 'react-router-dom';

function Sidebar(){
    return(
        <body>
      <div className="App">
      <div className="sidebar">
        <div className="sidebar-header">
          <br></br>
          <h1>Hola Juan</h1>
        </div>
        <div className="sidebar-nav">
          <ul>
          <li>
              <a href=""><span class="material-symbols-outlined">space_dashboard </span><Link to="/dashboard"> Dashboard<p></p></Link></a>
            </li>
            <li>
              <a href=""><span class="material-symbols-outlined">add_to_queue </span><Link to="/dashboard/register"> Registrar<p>Computadora</p></Link></a>
            </li>
            <li>
              <a href=""><span class="material-symbols-outlined">screen_search_desktop</span><Link to="/dashboard/list"> Ver<p>Computadoras</p></Link></a>
            </li>
            <li>
              <a href=""><span class="material-symbols-outlined">info</span><Link to="/dashboard/state"> Soporte<p>Computadoras</p></Link></a>
            </li>
            <li className='logout'>
              <a href=""><span class="material-symbols-outlined">logout</span><Link to="/login">Cerrar Sesion </Link></a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <Outlet/>
        </body>
    )
};

export default Sidebar;