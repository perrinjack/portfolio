import React from 'react';
import '../styles/header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);
type HeaderInfoProps = {
  itemText: string;
  link?: string;
};
const HeaderInfo = ({ itemText, link }: HeaderInfoProps) => {
  return (
    <div>
      <div className="header-detail">
        {' '}
        <div>
          <FontAwesomeIcon icon="user" className="icon" />
        </div>
        {link ? <a href={link}> {itemText} </a> : <div>{itemText}</div>}
      </div>
    </div>
  );
};

export default HeaderInfo;
