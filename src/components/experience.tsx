import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.scss';
import Project from './project';
import '../styles/experience.scss';

type EmployerCardProps = {
  data?: string;
  title: string;
  summary: string;
};

const Experience = ({ data, title, summary }: EmployerCardProps) => {
  const handleProjectClick = (index: number) => {
    alert('Project Clicked');
  };

  return (
    <div className="experience">
      <div className="experience-title">Education</div>
      <div className="experience-title">{title}</div>
      <ReactMarkdown className="code-block" source={summary} />
      <div className="project-container">
        {' '}
        <Project
          title="Makers Bnb"
          role="Full Stack"
          date={{ from: 'September', to: 'september' }}
          onClick={handleProjectClick}
          id={1}
        />{' '}
        <Project
          title="quikNews"
          role="Full Stack"
          date={{ from: 'September', to: 'December' }}
          onClick={handleProjectClick}
          id={2}
        />{' '}
        <Project
          title="Small Steps"
          role="Full Stack"
          date={{ from: 'September', to: 'January' }}
          onClick={handleProjectClick}
          id={3}
        />
        <Project
          title="Groundz Worldwide (Under Construction)"
          role="Full Stack "
          date={{ from: 'September', to: 'January' }}
          onClick={handleProjectClick}
          id={5}
        />
      </div>
    </div>
  );
};

export default Experience;
