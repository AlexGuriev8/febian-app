import React from 'react';
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='pd-2'>
      <input
        className='febian_input'
        type='search'
        placeholder='Search employees'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;