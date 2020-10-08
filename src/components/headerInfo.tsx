import React, { ReactNode } from 'react';
import '../styles/header.scss';

type HeaderInfoProps = {
  itemText: string;
  link?: string;
  children: ReactNode;
};
const HeaderInfo = ({ itemText, link, children }: HeaderInfoProps) => {
  return (
    <div>
      <div className="header-detail">
        <div className="icon-container">
          {' '}
          <a href={link} target="_blank">
            {' '}
            {children}
          </a>
        </div>
        {link ? (
          <a href={link} target="_blank">
            {' '}
            {itemText}{' '}
          </a>
        ) : (
          <div>{itemText}</div>
        )}
      </div>
    </div>
  );
};

export default HeaderInfo;
