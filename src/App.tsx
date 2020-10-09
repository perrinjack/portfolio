import React from 'react';
import './App.scss';
import Experience from './components/experience';
import Header from './components/header';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
class App extends React.Component {
  handlePhoneClick = () => (event: any) => {
    window.open('tel:+447590606244');
  };
  handleMailClick = () => (event: any) => {
    window.open('mailto:perrinjack96@gmail.com');
  };

  render() {
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
                    <Experience
                      title="Bristol University"
                      summary="blah blah"
                    />
                    <Experience title="St Albans School" summary="blah blah" />
                  </div>
                </div>
                <BottomNavigation
                  showLabels={true}
                  style={{
                    width: '100%',
                    position: 'fixed',
                    bottom: 0,
                  background: '#800000'}}
                
                >
                  <BottomNavigationAction
                    label="Call"
                    onClick={this.handlePhoneClick()}
                    style={{color: 'white'}}
                    icon={<PhoneIcon />}
                  />

                  <BottomNavigationAction
                    label="Mail"
                    onClick={this.handleMailClick()}
                    style={{color: 'white'}} icon={ < EmailIcon />}
                  />
                  <BottomNavigationAction label="LinkedIn" style={{color: 'white'}} icon={<LinkedInIcon />}/>
                </BottomNavigation>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
