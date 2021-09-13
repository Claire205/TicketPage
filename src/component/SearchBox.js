import React from 'react';

const SearchBox = ({ searchText,searchClick}) => {
    return(
        <div className="pa2">
            <input
                className='pa3 ba'
                type="search"
                placeholder="search museums"
                onChange={searchText}
            />
            <button onClick={searchClick}>Search</button>
        </div>
    );
}
export default SearchBox;
