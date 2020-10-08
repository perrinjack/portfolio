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
} from '@fortawesome/free-solid-svg-icons';
library.add(faUserGraduate, faLaptopCode, fab);
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="profile-photo" src={profile} alt="Jack Perrin" />
      </div>
      <div className="header-details">
        <HeaderInfo itemText="Jack Perrin">
          <FontAwesomeIcon icon="user-graduate" className="icon" />
        </HeaderInfo>
        <HeaderInfo itemText="Full Stack Developer">
          <FontAwesomeIcon icon="laptop-code" className="icon" />
        </HeaderInfo>
        <HeaderInfo
          itemText="LinkedIn"
          link="https://www.linkedin.com/in/perrinjack/"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} className="icon" />
        </HeaderInfo>
        <HeaderInfo itemText="Github" link="https://github.com/perrinjack">
          <FontAwesomeIcon icon={['fab', 'github']} className="icon" />
        </HeaderInfo>
      </div>
    </div>
  );
};

export default Header;
