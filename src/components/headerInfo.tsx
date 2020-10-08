import React, { ReactNode } from 'react';
import '../styles/header.scss';

type HeaderInfoProps = {
  itemText: string;
  link?: string;
  children?: ReactNode;
};
const HeaderInfo = ({ itemText, link, children }: HeaderInfoProps) => {
  return (
    <div>
      <div className="header-detail">
        <div className="icon-container">{children}</div>
        {link ? <a href={link}> {itemText} </a> : <div>{itemText}</div>}
      </div>
    </div>
  );
};

export default HeaderInfo;
