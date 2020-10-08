import React from 'react';
import '../styles/header.scss';

type HeaderInfoProps = {
  itemText: string;
  link?: string;
};
const HeaderInfo = ({ itemText, link }: HeaderInfoProps) => {
  return <div>{link ? <a href = {link}> {itemText} </a> : <div>{itemText}</div>}</div>;
};

export default HeaderInfo;
