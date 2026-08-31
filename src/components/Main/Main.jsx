import Card from '../Card/Card';
import Preloader from '../Preloader/Preloader';
import NotFound from '../NotFound/NotFound';
import { IconHeartForText } from '../IconHearts/IconHeartForText';
import './main.css';


function Main({
  search,
  loadCards,
  handleShowMore,
  preloader,
  onSaveClick,
  savedSeries,
  isSearchFail,
  isSavedRoute
}) {
  return (
    <main className="main-content">
      { preloader === true ? <Preloader/> : ''}
      { preloader === false && ((isSavedRoute === false && isSearchFail === true) || (isSavedRoute === true && search.length === 0)) && (
        <NotFound 
          title={ isSavedRoute ? "¡Aún no hay nada aquí!" : "No se encontrado nada" }
          text={ isSavedRoute ? (
            <>
            Aún no has guardado ninguna serie. Usa el corazón {<IconHeartForText/>} para añadir tus favoritas.
            </>
          ) : "Lo sentimos, pero no pudimos encontrar ninguna serie que coincida con tu búsqueda." }
        />
      )}
      
      { preloader === false && isSearchFail === false && search.length > 0 && (
          <section className="cards-grid">
            {search
              .slice(0, loadCards)
              .map((data) => {
                const isCardSave = savedSeries.some((serie) => serie.show.id === data.show.id);
                return <Card 
                  key={data.show.id}
                  score={data.score}
                  image={data.show.image?.original}
                  date={data.show.premiered || 'Fecha desconocida'}
                  title={data.show.name || 'Sin título'}
                  description={data.show.summary}
                  onSaveClick={onSaveClick}
                  data={ data }
                  isSaved={ isCardSave }
                />
              })}
          </section>
        )
      }
      
      <div className="main-content__pagination">
        {search.length > loadCards ? <button className="main-content__more-btn" onClick={handleShowMore}>
          Mostrar más
        </button> : ''}
      </div>
    </main>
  );
}

export default Main;