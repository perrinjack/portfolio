import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.scss';
import '../styles/experience.scss';
type EmployerCardProps = {
  data?: string;
  title: string;
  summary: string;
};

const Experience = ({ data, title, summary }: EmployerCardProps) => {
  return (
    <div className="experience">
      <div className="experience-title">{title}</div>
      <ReactMarkdown className="code-block" source={summary} />
    </div>
  );
};

export default Experience;
