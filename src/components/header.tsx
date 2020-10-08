import React from 'react';
import HeaderInfo from './headerInfo';
import '../styles/header.scss';
const Header = () => {
  return (
    <div className="header">
      <div>
        <img
          className="profile-photo"
          src={'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}
          alt="Jack Perrin"
        />
      </div>
      <div className="header-details">
        <HeaderInfo itemText="Jack Perrin" />
      </div>
    </div>
  );
};

export default Header;
