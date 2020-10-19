import React, { ReactNode } from 'react';
import '../styles/header.scss';
import '../styles/project.scss';
type ProjectProps = {
  title: string;
  role: string;
  date: { from: string; to: string };
};
const Project = ({ title, role, date }: ProjectProps) => {
  return (
    <div className="project">
      <div className="project-details">
        <div className="core-information">
          <div>{title}</div>
          <div>{role}</div>
          <div>
            {date.from} - {date.to}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
