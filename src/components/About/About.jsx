import { Link } from 'react-router-dom';
import { IconHeartForText } from '../IconHearts/IconHeartForText';
import './about.css'
function About() {
  return (
    <section className="about">
      <div className="about__content">
        <h1 className="about__title">
          Bienvenido a <span className="about__highlight">sBox</span>
        </h1>
        
        <div className="about__text-block">
          <p className="about__description">
            ¿Tienes una serie en mente pero no recuerdas bien su nombre? 
            <strong> sBox</strong> es un motor de búsqueda rápido y minimalista diseñado para los amantes de la televisión. 
            Únicamente debes introducir una palabra clave y nuestro sistema consultará una base de datos global para mostrarte las coincidencias de las posibles series que puedan interesarte.
          </p>
          
          <h3 className="about__subtitle">¿Cómo funciona?</h3>
          <ul className="about__list">
            <li className="about__list-item">
              <strong>1. Búsqueda por palabra clave:</strong> Dirígete a la pestaña de exploración, escribe el nombre de la serie que estás buscando y presiona buscar.
            </li>
            <li className="about__list-item">
              <strong>2. Resultados instantáneos:</strong> Obtén de inmediato las portadas oficiales, valoraciones, fechas de estreno y resúmenes sin spoilers de todas las series que coincidan con tu búsqueda.
            </li>
            <li className="about__list-item">
              <strong>3. Guarda tus hallazgos:</strong> Usa el corazón ({ <IconHeartForText /> }) en cualquier tarjeta para añadir la serie a tu colección personal en la pestaña de "Guardados", para que nunca la olvides.
            </li>
          </ul>
        </div>

        <Link to="/explorar" className="about__cta-btn">
          Comenzar a buscar
        </Link>
      </div>
    </section>
  );
}

export default About;