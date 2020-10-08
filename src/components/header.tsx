import React from 'react';
import HeaderInfo from './headerInfo';
import '../styles/header.scss';
const Header = () => {
  return (
    <div className="header">
      <div className="header-details">
        {' '}
        <HeaderInfo itemText="Jack Perrin" />
      </div>
    </div>
  );
};

export default Header;
