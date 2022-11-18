import React from 'react'
import './App.css';
import Activity from './component/Activity';
import Home from './component/Home';
import Ticked from './component/Ticked';

function App() {
  return (
    <div className="App">
      <Ticked/>
      <Home/>
      <Activity/>
    </div>
  );
}

export default App;
