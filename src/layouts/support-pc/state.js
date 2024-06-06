import Sidebar from '../../components/sidebar';
import '../../styles/state.css'

function State(){
    return(
<div className="App">
      <Sidebar/>
      <div className="content">
        <div className='titulo'>
          <h1>Estado de las Computadoras</h1>
          <h5><span class="material-symbols-outlined">info</span> Si el problema fue solucionado, presione el visto</h5>
        </div>
        <div className="cuadros1">
            <div class="div1"> 
            <h5>Laboratorio 1</h5>
                <img src='../img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn-check"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div2"> 
            <h5>Laboratorio 1</h5>
                <img src='../img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn-check"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div3"> 
            <h5>Laboratorio 1</h5>
                <img src='../img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn-check"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div4"> 
            <h5>Laboratorio 1</h5>
                <img src='../img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn-check"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div5"> 
            <h5>Laboratorio 1</h5>
                <img src='../img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn-check"><span class="material-symbols-outlined">verified</span></button>
            </div>
            <div class="div6"> 
            <h5>Laboratorio 1</h5>
            <img src='../img/icono.jpg' />
                <p>Pc 001</p><br></br><br></br><br></br>
                <p>nada</p>
                <button className="btn-check"><span class="material-symbols-outlined">verified</span></button>
            </div>
        </div>
      </div>
    </div>
    )
};
export default State;