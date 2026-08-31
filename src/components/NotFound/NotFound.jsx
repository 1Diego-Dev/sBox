import './not-found.css';

function NotFound({ 
  title, 
  text 
}) {
  return (
    <div className="not-found">
      <div className="not-found__icon-container">
        {/* SVG de una lupa cancelada o rota */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="not-found__icon">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
          <line x1="8" y1="8" x2="12" y2="12" />
          <line x1="12" y1="8" x2="8" y2="12" />
        </svg>
      </div>
      <h2 className="not-found__title">{ title }</h2>
      <p className="not-found__text">{ text }</p>
    </div>
  );
}

export default NotFound;