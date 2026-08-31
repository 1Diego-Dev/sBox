// Hoja de estilos
import './App.css';

// Componentes a renderizar
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Main from '../Main/Main';
import PopupWithForm from '../PopupWithform/PopupWithForm';
import About from '../About/About';
import PageNotFound from '../PageNotFound/PageNotFound';

// Componentes lógicos
import { useEffect, useState } from 'react';
import { api } from '../../utils/ThirdPartyApi';
import { Routes, Route } from 'react-router-dom';

function App() {
  // Estado para hacer la búsqueda
  const [ search, setSearch ] = useState([]);

  // Estado para el preloader
  const [ preloader, setPreloader ] = useState(false);

  // Estado para establecer el límites de tarjetas a mostrar
  const [ loadCards, setLoadCards ] = useState(3);

  // Estado para la gestión de errores/resultados
  const [ isSearchFail, setIsSearchFail ] = useState(false);

  // Estado para la apertura del popup
  const [ isPopupOpen, setIsPopupOpen ] = useState(false);

  // Estado para el guardado de series
  const [ savedSeries, setSavedSeries ] = useState(() => {
    const series = localStorage.getItem('misSeries');
    return series ? JSON.parse(series) : [];
  });


  /*------ Handlers ------ */ 
  // Controlador de busqueda
  const handleSearch = (query) => {
    // Se carga el preloader mientras se hace la búsqueda
    setPreloader(true);

    // Se pasa los datos enviados a la api
    api.searchSeries(query)
      .then((data) => {
        if(data.length === 0 ) {
          return Promise.reject();
        }
        setIsSearchFail(false);
        setLoadCards(3);
        setSearch(data);
      })
      .catch(() => {
        setIsSearchFail(true);
      })
      .finally(()=> {
        setPreloader(false);
      })
  };

  // Controlador de guardado de tarjetas
  const saveSeries = (data) => {
    const isTheSerieSaved = savedSeries.some((serie) => {
      return serie.show.id === data.show.id 
    });

    let seriesInStorage;

    if (!isTheSerieSaved) {
      seriesInStorage = [ data,...savedSeries,];
    }else{
      seriesInStorage = savedSeries.filter((serie) => {
        return serie.show.id !== data.show.id;
      });
    }
    setSavedSeries(seriesInStorage);
    localStorage.setItem('misSeries', JSON.stringify(seriesInStorage));
  }

  // Controlador de clausura de popup
  const closeAllPopups = () => {
    setIsPopupOpen(false);
  };
  // Controlador para apertura de popup  
  const openAllPopups = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="page-wrapper">
      <Routes>
        <Route path='/' element={
          <>
            <Header openAllPopups={ openAllPopups }/>
            <About/>
          </>
          }
        />
        <Route path='/explorar' element={
            <>
              <Header openAllPopups={ openAllPopups }/>
              <SearchForm onSearch={ handleSearch } />
              <Main 
                search={ search } 
                loadCards={ loadCards } 
                handleShowMore={() =>{
                  setLoadCards(loadCards + 3);
                }}
                preloader={ preloader }
                onSaveClick={ saveSeries }
                savedSeries={ savedSeries }
                isSearchFail={ isSearchFail }
                isSavedRoute={ false }
              />
            </>
          }
        />

        <Route path='/guardados' element={
            <>
              <Header openAllPopups={ openAllPopups }/>
              <Main
                search = { savedSeries }
                loadCards={ savedSeries.length }
                handleShowMore={() =>{
                    setLoadCards(loadCards + 3);
                  }}
                preloader={ preloader }
                onSaveClick={ saveSeries }
                savedSeries={ savedSeries }
                isSearchFail={ false }
                isSavedRoute={ true }
              />
            </>
          }
        />
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>
      <PopupWithForm isOpen={isPopupOpen} onClose={ closeAllPopups } />
    </div>
  );
}

export default App;