import '../styles/logIn.css';
import { Outlet, Link  } from 'react-router-dom';
import React, { useState } from 'react';


function SingUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    // Aquí puedes realizar alguna lógica adicional, como enviar los datos a un servidor

    // Mostrar el modal de éxito después del registro
    setShowModal(true);
  };
  return (
    <body className='l-body'>
 <div className="registration-form">
      <h2>Ingresar</h2>
      <p>Ingrese los datos solicitados</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="l-button"> <Link to="/dashboard" className='login-button'>Ir a LogIn</Link></button>
      </form>

      {/* Modal de éxito */}
      {showModal && (
        <div className="modal-background">
          <div className="modal">
            <span className="close-button" onClick={() => setShowModal(false)}>&times;</span>
            <div className="checkmark">
              <div className="checkmark_circle"></div>
              <div className="checkmark_stem"></div>
              <div className="checkmark_kick"></div>
            </div>
            <p>¡Ingreso exitoso!</p>
          </div>
        </div>
      )}
    </div>
    <Outlet/>
    </body>
  );
}

export default SingUp;
