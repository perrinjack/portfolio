import React from 'react';
import './App.scss';
import Experience from './components/experience';
import Header from './components/header';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <div>
              <div className="app-body">
                <Header />

                <div className="experience-container">
                  <Experience title="Makers Academy" summary="blah blah" />
                  <Experience title="Bristol University" summary="blah blah" />
                  <Experience title="St Albans School" summary="blah blah" />
                </div>
              </div>
              <BottomNavigation showLabels={true}>
                <BottomNavigationAction
                  label="Call"
                  component={Link}
                  to="/signal"
                />
                <BottomNavigationAction label="Mail" />
                <BottomNavigationAction label="LinkedIn" />
              </BottomNavigation>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
