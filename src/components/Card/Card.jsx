import './card.css';
import { IconHeart } from '../IconHearts/IconHeart';
import { IconHeartFilled } from '../IconHearts/IconHeartFilled'

function Card({
  score,
  image,
  date,
  title,
  description,
  onSaveClick,
  data,
  isSaved
}) {
  const cleanString = (string) => {
    return string ? string.replace(/<[^>]+>/g, '') : string;
  }
  const calculateScore = Math.floor(score * 100)/10;

  return (
    <article className="card">
      <div className="card__image-container">
        <img 
          src={ image || 'https://placehold.co/500x500?text=Not+Found+Image'} 
          alt="Placeholder" 
          className="card__image" 
        />
        <span className="card__image-fallback">Rating: { calculateScore > 10 ? 10 : calculateScore}</span>
        <button 
          className="card__save-btn" 
          aria-label="Guardar" 
          onClick={()=>{
            onSaveClick(data);
          }}
        >
          <span className="card__save-icon" >{isSaved ? <IconHeartFilled /> : <IconHeart/> }</span>
        </button>
      </div>
      <div className="card__content">
        <p className="card__date">{ date }</p> 
        <h2 className="card__title">{ title }</h2>
        <p className="card__text">
          { cleanString(description) || 'No hay descripción disponible'}
        </p>
        <p className="card__source">TVMAZE</p>
      </div>
    </article>
  );
}

export default Card;