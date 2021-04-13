import { useState } from 'react';
import './Searchbar.scss';

const Searchbar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => setInputValue(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <header onSubmit={handleSubmit} className="Searchbar">
      <form className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          value={inputValue}
          onChange={handleInputChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default Searchbar;
