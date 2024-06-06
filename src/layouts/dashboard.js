import Sidebar from '../components/sidebar';
import '../styles/dashboard.css'
import { Outlet, Link } from 'react-router-dom';

function Dashboard(){
    return(
        <body className='d-body'>
             <div className="App">
        <Sidebar/>
      <div className="content">
        <div className="banner"><br></br><br></br><br></br><br></br>
          <p>Nuestro sistema te ayudara a <br></br><br>
          </br>administrar los laboratorios</p>
          <button className="btn-1">Registrar</button>
        </div>
        <h6>Selecciona el Laboratorio</h6>
        <div className="cuadros">
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
            <br></br>
            <Link to="/dashboard/list/xian"><button>XIAN</button></Link>
          </div>
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
          <br></br>
          <Link to="/dashboard/list/gory"><button>GORY</button></Link>
          </div>
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
            <br></br>
            <Link to="/dashboard/list/toolouse"><button>TOOLOUSE</button></Link>
          </div>
          <div className="cuadro">
          <br></br>
          <img src="img/pc.png"/>
            <br></br>
            <Link to="/dashboard/list/yasuni"><button>YASUNI</button></Link>
          </div>
        </div>
      </div>
    </div>
    <Outlet/>
        </body>
    );

}

export default Dashboard;