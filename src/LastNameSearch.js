import React, { useState } from 'react';
import JSONDATA from './MOCK_DATA.json';
import './App.css';

function LastNameSearch(){
    const [LastNameSearched, SetLastNameSearched] = useState('');
    return(
        <div className='App'>
            <input type='text'
            placeholder='Type a Lastname'
            onChange={event => {
                SetLastNameSearched(event.target.value);
              }}/>
        {JSONDATA.filter(value => {
        if (LastNameSearched === '') {
          return value;
        } else if (value.last_name.toLowerCase().includes(LastNameSearched.toLowerCase())) {
          return value;
        }
        return null;
      }).map((value, key) => (
        <div className='user' key={key}>
          <p>{value.last_name}</p>
        </div>
      ))}
        </div>
    );

}

export default LastNameSearch;