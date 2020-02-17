import React from 'react';
import './searchBox.style.css';

const SearchBox = ({ placeholder, handleChange }) => (
	<div className="search">
	  <input
      type="search"
      placeholder={ placeholder }
      onChange={ handleChange }
    />
    </div>
)


export default SearchBox;