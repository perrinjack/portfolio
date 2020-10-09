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
          <Experience title="Makers Academy" summary="blah blah" />
          <Experience title="Bristol University" summary="blah blah" />
          <Experience title="St Albans School" summary="blah blah" />
        </div>
      </div>
    </div>
  );
}

export default App;
