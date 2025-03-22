import React from 'react';
import { Link } from 'react-router-dom';

const Pag404 = () => {
  return (
    <div className="pagNoFound">
      <h1>404</h1>
      <h2>Página No Encontrada</h2>
      <p>Lo sentimos, la página que estás buscando no existe o ha sido movida.</p>
      <Link to="/" className="boton">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default Pag404;