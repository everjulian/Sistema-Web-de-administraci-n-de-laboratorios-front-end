import React, { useState } from 'react';
import '../styles/RegistroComputadoras.css'; // Asegúrate de crear un archivo App.css para los estilos

function Compu() {
  const [registros, setRegistros] = useState([]);

  const handleInputChange = (index, field, value) => {
    setRegistros(prevRegistros => {
      const updatedRegistros = [...prevRegistros];
      updatedRegistros[index][field] = value;
      return updatedRegistros;
    });
  };

  const handleAddRegistro = () => {
    setRegistros(prevRegistros => [
      ...prevRegistros,
      {
        codigoActivo: '',
        marca: '',
        estado: '',
        claseActivo: '',
        descripcion: '',
      },
    ]);
  };

  const handleSubmit = () => {
    // Aquí puedes implementar la lógica para enviar los datos del formulario
    console.log(registros);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <h1>Hola Juan</h1>
        <button>Registrar Computadora</button>
        <button>Ver computadoras</button>
        <button>Soporte computadoras</button>
        <button>Cerrar Sesión</button>
      </div>

      <div className="form-container">
        <h1>Registro de Computadoras</h1>
        <table>
          <thead>
            <tr>
              <th>Codigo de Activo</th>
              <th>Marca</th>
              <th>Estado</th>
              <th>Clase de Activo</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={registro.codigoActivo}
                    onChange={(e) => handleInputChange(index, 'codigoActivo', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={registro.marca}
                    onChange={(e) => handleInputChange(index, 'marca', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={registro.estado}
                    onChange={(e) => handleInputChange(index, 'estado', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={registro.claseActivo}
                    onChange={(e) => handleInputChange(index, 'claseActivo', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={registro.descripcion}
                    onChange={(e) => handleInputChange(index, 'descripcion', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddRegistro}>Agregar Registro</button>
        <button onClick={handleSubmit}>Guardar</button>
      </div>
    </div>
  );
}

export default Compu;