import React from 'react';
import './App.css';
import Data from './pins.json';

function App() {
  return (

  <div>
    { Data.map(post => {
      return (
        <>
        <img src={post.images['136x136'].url}/>
        </>
      )
    })}
  </div>
  );
}

export default App;
