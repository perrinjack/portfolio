import React from 'react';
import ReactMarkdown from 'react-markdown';
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
          <div className="tech-stack-list">In development, bear with!</div>
          <div className="tag">{'</Link>'}</div>
          <div className="description indented-text">In development, bear with!</div>
        </div>
      </div>
    </>
  );
};

export default ProjectExpand;
