import '../styles/singUp.css';
import { Outlet, Link  } from 'react-router-dom';
import React, { useState } from 'react';


function SingUp() {
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Usuario:', username);
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
    // Aquí puedes realizar alguna lógica adicional, como enviar los datos a un servidor

    // Mostrar el modal de éxito después del registro
    setShowModal(true);
  };
  return (
    <body className='s-body'>
 <div className="registration-form">
      <h2>Regístrate</h2>
      <p>Ingrese los datos solicitados</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

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

        <button type="submit" className="register-button">Registrarse</button>
        <button className="l-button"> <Link to="/login" className='login-button'>Ir a LogIn</Link></button>
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
            <p>¡Registro exitoso!</p>
            <p>Su registro se ha completado correctamente.</p>
          </div>
        </div>
      )}
    </div>
    <Outlet/>
    </body>
  );
}

export default SingUp;
