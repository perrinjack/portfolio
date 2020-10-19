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
import education from './content/education.json';
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
            <AboutMe
              summary={
                'I am an energetic and ambitious Full Stack Junior Developer, looking for a role where I can consolidate and extend my programming knowledge, while also gaining exposure to product management and business strategy. After graduating from the University of Bristol with a Masters degree in Electrical and Electronic Engineering (First Class Honours), I spent 6 months travelling independently around South East Asia, Australia and New Zealand.'
              }
            />
            <div className="experience-container">
              {education.map((item) => (
                <Experience
                  title={item.title}
                  summary={item.summary}
                  subtitleReq={item.subtitleReq}
                  subtitle={item.subtitle}
                  projects={item.projects}
                />
              ))}
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
