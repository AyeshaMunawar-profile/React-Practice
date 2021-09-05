import React from 'react';
import './App.css';
import Counter from "../components/Counter/Counter"

const App =()=>{
  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter Component</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
