import React from 'react';
import '../styles/header.scss';

type HeaderInfoProps = {
  itemText: string;
};
const HeaderInfo = ({ itemText }: HeaderInfoProps) => {
  return <h1>{itemText}</h1>;
};

export default HeaderInfo;
