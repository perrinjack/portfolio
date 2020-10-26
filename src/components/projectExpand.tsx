import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/project.scss';
import '../App.scss';
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
      <div className="project-popup code-block dark-theme">
        <div className="project-details">
          <div className="project-popup-close" onClick={closePopup}>
            <CloseIcon />
          </div>

          <ReactMarkdown className="description indented-text">
            hello world
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default ProjectExpand;
