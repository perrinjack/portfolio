import React, { useState } from 'react';
import ExposureIcon from '@material-ui/icons/Exposure';

import '../App.scss';

type AboutMeProps = {
  summary: string;
};
const AboutMe = ({ summary }: AboutMeProps) => {
  const [isTruncated, setIsTruncated] = useState(false);

  const truncateContents = (element: Element) => {
    setIsTruncated(true);
    element.classList.add('truncated');
  };

  const expandContents = (element: Element) => {
    setIsTruncated(false);
    element.classList.remove('truncated');
  };

  const truncateExpandContents = () => {
    const indentedText = document.getElementsByClassName('indented-text')[0];
    isTruncated ? expandContents(indentedText) : truncateContents(indentedText);
  };

  return (
    <div
      className="about-me code-block dark-theme"
      onClick={truncateExpandContents}
    >
      <div className="tag">
        {'<AboutMe>'}
        <span style={{ float: 'right' }}>
          <ExposureIcon />
        </span>
      </div>
      <div className="indented-text">{summary}</div>
      <div className="tag">{'</AboutMe>'}</div>
      <div className="tag-container">
        <div className="tag-wrapper">
          <div className="tag">{'<Core Skills>'}</div>
          <div className="indented-text">
            <li>Quick Learner</li>
            <li>Time Management</li>
            <li>Problem Solving</li>
            <li>Courage to Experiment</li>
          </div>
          <div className="tag">{'</Core Skills>'}</div>
        </div>
        <div className="tag-wrapper">
          <div className="tag">{'<PersonalityTraits>'}</div>
          <div className="indented-text">
            <li>Focused & Determined</li>
            <li>Flexible & Adaptable</li>
            <li>Ambitious</li>
            <li>Truthful</li>
          </div>
          <div className="tag">{'</PersonalityTraits>'}</div>
        </div>
        <div className="tag-wrapper">
          <div className="tag">{'<CodingPrinciples>'}</div>
          <div className="indented-text">
            <li>Commit Often, Perfect Later</li>
            <li>Robustness Through Tests</li>
            <li>Code Reviews Help Everyone</li>
            <li>Pairing Powers Productivity</li>
          </div>
          <div className="tag">{'</CodingPrinciples>'}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
