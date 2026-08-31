import { useState } from 'react';
import './search-form.css';

function SearchForm({ onSearch }) {
  const [searchData, setSearchData] = useState('');

  return (
    <form 
      className="search-form" 
      name="search-form"
      onSubmit={ (e) => { 
        e.preventDefault();
        onSearch(searchData);
      }}  
    >
      <input 
        type="text" 
        className="search-form__input" 
        placeholder="Busca tu serie favorita..." 
        value={ searchData }
        onChange={ (e) => setSearchData(e.target.value) }
        required 
      />
      <button type="submit" className="search-form__button">
        Buscar
      </button>
    </form>
  );
}

export default SearchForm;