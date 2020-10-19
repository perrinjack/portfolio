import React, { ReactNode } from 'react';
import '../styles/header.scss';

type ProjectProps = {
  title: string;
};
const Project = ({ title }: ProjectProps) => {
return <div>{title}</div>;
};

export default Project;
