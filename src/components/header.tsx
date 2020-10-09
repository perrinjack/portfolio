import React from 'react';
import HeaderInfo from './headerInfo';
import '../styles/header.scss';

import profile from '../assets/me.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserGraduate,
  faLaptopCode,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
library.add(faUserGraduate, faLaptopCode, fab, faMapMarkedAlt);
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="profile-photo" src={profile} alt="Jack Perrin" />
      </div>
      <div className="header-details">
        <HeaderInfo itemText="Jack Perrin">
          <FontAwesomeIcon style = {{color: "#800000"}} icon="user-graduate" className="icon" />
        </HeaderInfo>
        <HeaderInfo itemText="Full Stack Developer">
          <FontAwesomeIcon style = {{color: "#800000"}}  icon="laptop-code" className="icon" />
        </HeaderInfo>
        <HeaderInfo itemText="London">
          <FontAwesomeIcon style = {{color: "#800000"}}  icon="map-marked-alt" className="icon" />
        </HeaderInfo>
        <HeaderInfo itemText="Github" link="https://github.com/perrinjack">
          <FontAwesomeIcon style = {{color: "#800000"}}  icon={['fab', 'github']} className="icon" />
        </HeaderInfo>
      </div>
    </div>
  );
};

export default Header;
