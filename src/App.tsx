import React from 'react';
import './App.scss';
import Experience from './components/experience';
import Header from './components/header';
function App() {
  return (
    <div>
      <div className="app-body">
        <Header />

        <div className="experience-container">
          <Experience data="hello" />
          <Experience data="hello" />
          <Experience data="hello" />
        </div>
      </div>
    </div>
  );
}

export default App;
