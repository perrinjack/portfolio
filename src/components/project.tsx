import React, { ReactNode } from 'react';
import '../styles/header.scss';
import '../styles/project.scss';
type ProjectProps = {
  title: string;
};
const Project = ({ title }: ProjectProps) => {
  return (
    <div className="project">
      <div className="project-details">
        <div className="core-information">
          <div>{title}</div>
          <div>{'Front end'}</div>
          <div>
            {'september'} - {'october'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
