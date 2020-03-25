import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
    return (
        <div className='sb' >
            <input
                type='search'
                placeholder='Search...'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;