import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.scss';
import Project from './project';
import '../styles/experience.scss';

type EmployerCardProps = {
  data?: string;
  title: string;
  summary: string;
  subtitle?: string;
  from: string;
  to: string;
  projects: { name: string; role: string; from: string; to: string }[];
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
  const handleProjectClick = (index: number) => {
    alert('Project Clicked');
  };

  return (
    <div className="experience">
      <div className="experience-title">{subtitle}</div>
      <div className="experience-title">
        {title}||{from} - {to}{' '}
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
            id={1}
            onClick={handleProjectClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
