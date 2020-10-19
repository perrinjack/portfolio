import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.scss';
import Project from './project';
import ProjectExpand from './projectExpand';
import '../styles/experience.scss';

type EmployerCardProps = {
  data?: string;
  title: string;
  summary: string;
  subtitle?: string;
  from: string;
  to: string;
  projects: {
    name: string;
    role: string;
    from: string;
    to: string;
    id: number;
  }[];
};

const Experience = ({
  data,
  title,
  summary,
  subtitle,
  from,
  to,
  projects,
}: EmployerCardProps) => {
  const [expandedProjects, setExpandedProjects] = useState([-1]);

  const handleProjectClick = (index: number) => {
    setExpandedProjects([index]);
    alert(index);
  };

  return (
    <div className="experience">
      <div className="experience-title">{subtitle}</div>
      <div className="experience-title">
        {title}||{from} - {to}{' '} {expandedProjects}
      </div>
      <ReactMarkdown className="code-block" source={summary} />
      <div className="project-container">
        {' '}
        {projects.map((d) => (
          <Project
            title={d.name}
            role={d.role}
            from={d.from}
            to={d.to}
            id={d.id}
            onClick={handleProjectClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
