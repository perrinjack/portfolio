import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.scss';
import Project from './project';
import '../styles/experience.scss';
type EmployerCardProps = {
  data?: string;
  title: string;
  summary: string;
  sectionTitle?: string;
};

const Experience = ({
  data,
  title,
  summary,
  sectionTitle,
}: EmployerCardProps) => {
  if (sectionTitle) {
    return (
      <div className="experience">
        <div className="experience-title">{sectionTitle}</div>
        <div className="experience-title">{title}</div>
        <ReactMarkdown className="code-block" source={summary} />
        <div className="project-container">
          {' '}
          <Project
            title="project1"
            role="full stack"
            date={{ from: 'September' , to: 'september'}}
          />{' '}
          <Project
            title="project2"
            role="full stack"
            date={{ from: 'September', to: 'December' }}
          />{' '}
          <Project
            title="project3"
            role="full stack"
            date={{ from: 'September', to: 'January' }}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="experience">
      <div className="experience-title">{title}</div>
      <ReactMarkdown className="code-block" source={summary} />
    </div>
  );
};

export default Experience;
