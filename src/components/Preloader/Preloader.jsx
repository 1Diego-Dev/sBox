
import './preloader.css';

function Preloader() {
  return (
    <div className="preloader">
      <i className="preloader__circle"></i>
      <p className="preloader__text">Buscando coincidencias...</p>
    </div>
  );
}

export default Preloader;