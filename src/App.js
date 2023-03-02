import React from 'react';
import './App.css';
import Activity from './component/Activity';
import Image from './component/Image';

function App() {
  return (
    <div className="App">
      <h1>Free Boredom Cure!</h1>
      <div className='activity'>
        <Activity />
      </div>
      <div className='image'>
        <Image />
      </div>
    </div>
  );
}

export default App;