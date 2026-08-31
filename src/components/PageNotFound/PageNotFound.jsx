import { Link } from 'react-router-dom';
import './page-not-found.css';

function PageNotFound() {
  return (
    <section className="page-not-found">
      <div className="page-not-found__container">
        <h1 className="page-not-found__title">404</h1>
        <p className="page-not-found__subtitle">¡Ups! Te has salido del mapa.</p>
        <p className="page-not-found__text">
          La página que estás buscando no existe o ha sido removida de esta dimensión.
        </p>
        
        <Link to="/" className="page-not-found__btn">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}

export default PageNotFound;