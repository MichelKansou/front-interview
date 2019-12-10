import React from 'react';

const Select = ({ value, handleChange }) => {
    return (
        <select value={value} onChange={handleChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
        </select>
    );
};

export default Select;
