import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';

import SearchData from './SearchData.js';
import SearchResult from './SearchResult.js';
import SearchHeader from './SearchHeader.js';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [receivedQuery, setReceivedQuery] = useState('');

  function handleGetQuery (data) {
    setReceivedQuery(data);
  };

  return (
    <BrowserRouter>
      <SearchHeader onDataSend={handleGetQuery} className='fixed' />
      <div className='d-flex' style={{width: '80%', margin: '0 auto',paddingTop: '100px'}}>
        <div style={{width: '45%', marginRight: '10%'}}>
          <SearchData />
        </div>
        <div style={{width: '45%'}}>
          <SearchResult saveQuery={receivedQuery} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
