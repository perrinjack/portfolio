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
  const handleProjectClick = (index: number) => {
    alert('Project Clicked');
  };

  if (sectionTitle) {
    return (
      <div className="experience">
        <div className="experience-title">{sectionTitle}</div>
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
  }
  return (
    <div className="experience">
      <div className="experience-title">{title}</div>
      <ReactMarkdown className="code-block" source={summary} />
      <div className="project-container">
        <Project
          title="project4"
          role="full stack"
          date={{ from: 'September', to: 'January' }}
          onClick={handleProjectClick}
          id={4}
        />
      </div>
    </div>
  );
};

export default Experience;
