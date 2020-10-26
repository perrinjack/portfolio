import React from 'react';
import '../styles/header.scss';
import '../styles/project.scss';
import AddBoxIcon from '@material-ui/icons/AddBox';
type ProjectProps = {
  title: string;
  role: string;
  from: string;
  to: string;
  id: number;

  onClick: (id: number) => void;
};
const Project = ({ title, role, from, to, onClick, id }: ProjectProps) => {
  return (
    <div className="project" onClick={() => onClick(id)}>
      <div className="project-details">
        <div className="core-information">
          <div>{title}</div>
          <div>{role}</div>
          <div>
            {from} - {to}
          </div>
          
        </div>
        <AddBoxIcon className="project-popup-open"/>
      </div>
    </div>
  );
};

export default Project;
