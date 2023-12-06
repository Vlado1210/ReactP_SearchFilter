import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';
import './App.css';

function NameSearch() {
  const [searchedName, setSearchedName] = useState('');

  return (
    <div className='App'>
      <input
        type='text'
        placeholder='Search...'
        onChange={event => {
          setSearchedName(event.target.value);
        }}
      />
      {JSONDATA.filter(value => {
        if (searchedName === '') {
          return value;
        } else if (value.first_name.toLowerCase().includes(searchedName.toLowerCase())) {
          return value;
        }
        return null;
      }).map((value, key) => (
        <div className='user' key={key}>
          <p>{value.first_name}</p>
        </div>
      ))}
    </div>
  );
}

export default NameSearch;
