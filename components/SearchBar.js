import React from 'react';

const SearchBar = ({ handleChange }) => (
    <div className="search-bar">
        <label htmlFor="search-input">Search :</label>
        <input id="search-input" type="text" className="input" onChange={handleChange} placeholder="Search..." />
    </div>
);

export default SearchBar;
