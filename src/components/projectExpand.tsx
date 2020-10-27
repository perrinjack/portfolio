import React from 'react';

import '../styles/project.scss';
import '../App.scss';
import Blocker from './blocker';
import CloseIcon from '@material-ui/icons/Close';
type DataProps = {
  project: {
    name: string;
    role: string;
    from: string;
    to: string;
    id: number;
    description: string;
    link: string;
  }[];
  closePopup: () => void;
};

const ProjectExpand = ({ project, closePopup }: DataProps) => {
  return (
    <>
      <Blocker />
      <div className="project-popup code-block dark-theme">
        <div className="project-details">
          <div className="project-popup-close" onClick={closePopup}>
            <CloseIcon />
          </div>
          <div className="indented-text">
            <div>{project[0].name}</div>
            <div>{project[0].role}</div>
            <div>
              {project[0].from} - {project[0].to}
            </div>
          </div>
          <div className="tag">{'<TechStack>'}</div>
          <div className="tech-stack-list">In development, bear with!</div>
          <div className="tag">{'</TechStack>'}</div>
          <div className="tag">{'<Link>'}</div>
          Visit here: <a className="link" href={project[0].link}>{project[0].name}</a>
          <div className="tag">{'</Link>'}</div>
          <div className="tag">{'<Description>'}</div>
          <div className="description indented-text">
            {project[0].description}
          </div>
          <div className="tag">{'</Description>'}</div>
        </div>
      </div>
    </>
  );
};

export default ProjectExpand;
