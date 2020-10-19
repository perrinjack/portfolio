import React from 'react';
import './App.scss';
import Experience from './components/experience';
import Header from './components/header';
import { BottomNavigation } from '@material-ui/core';
import { BottomNavigationAction } from '@material-ui/core';
import AboutMe from './components/aboutMe';
import PhoneIcon from '@material-ui/icons/Phone';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
class App extends React.Component {
  handlePhoneClick = () => (event: any) => {
    window.location.href = 'tel:+447590606244';
  };
  handleMailClick = () => (event: any) => {
    window.location.href = 'mailto:perrinjack96@gmail.com';
  };

  handleLinkedInClick = () => (event: any) => {
    window.open('https://www.linkedin.com/in/perrinjack/');
  };

  render() {
    return (
      <div>
        <div>
          <div className="app-body">
            <Header />
            <AboutMe />
            <div className="experience-container">
              <Experience
                title="Makers Academy || Apr - Jul 2020"
                summary={
                  'A 16-week intensive programming bootcamp, focusing on : \n\n* Agile methodologies.\n\n* Object-oriented design.\n\n* Test driven development and behaviour driven development.\n\n* Pair programming.\n\n* Production of high quality clean code.\n\n* Emotional intelligence.'
                }
                sectionTitle={'Education'}
              />
              <Experience
                title="Bristol University || Sep 2015 - Jun 2019"
                summary={
                  '* MEng Electrical and Electronic Engineering.\n\n* First Class Honours.\n\n* Specialised in Communications Engineering.\n\n* Represented the University of Bristol at Rugby between 2015-2019.'
                }
              />
              <Experience
                title="St Albans School || Sep 2008 - Jul 2015"
                summary={
                  "* A Level - 3A's (Maths, Physics, Electronics)  \n\n* AS Level - 1A (Geography)  \n\n* GCSE - 7A*'s (Maths, Biology, Chemistry, Physics, Geography, English Literature, English Language) & 3A's (French, Latin, Electronics)"
                }
              />
            </div>
            <br></br>
            <br></br>
          </div>
          <BottomNavigation
            showLabels={true}
            style={{
              width: '100%',
              position: 'fixed',
              bottom: 0,
              background: '#800000',
            }}
          >
            <BottomNavigationAction
              label="Call"
              onClick={this.handlePhoneClick()}
              style={{ color: 'white' }}
              icon={<PhoneIcon />}
            />

            <BottomNavigationAction
              label="Mail"
              onClick={this.handleMailClick()}
              style={{ color: 'white' }}
              icon={<EmailIcon />}
            />
            <BottomNavigationAction
              label="LinkedIn"
              style={{ color: 'white' }}
              icon={<LinkedInIcon />}
              onClick={this.handleLinkedInClick()}
            />
          </BottomNavigation>
        </div>
      </div>
    );
  }
}
export default App;
