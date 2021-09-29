import React from 'react';
import Stopwatch from './components/Stopwatch/Stopwatch';
import './App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Stopwatch />
    </div>
  );
};

export default App;
