import React, { useState } from 'react';
import ExposureIcon from '@material-ui/icons/Exposure';

import '../App.scss';

const AboutMe = () => {
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
      <div className="indented-text">
        block block block block block block block block block block block block
        block block block block block block block block block block block block
        block block block block block blockblock block block block block block
        block block
      </div>
      <div className="tag">{'</AboutMe>'}</div>
      <div className="tag-container">
        <div className="tag-wrapper">
          <div className="tag">{'<CoreValues>'}</div>
          <div className="indented-text">
            <li>block block</li>
            <li>block block</li>
            <li>block block</li>
            <li>block block</li>
          </div>
          <div className="tag">{'</CoreValues>'}</div>
        </div>
        <div className="tag-wrapper">
          <div className="tag">{'<PersonalityTraits>'}</div>
          <div className="indented-text">
            <li>block block</li>
            <li>block block</li>
            <li>block block</li>
            <li>block block</li>
          </div>
          <div className="tag">{'</PersonalityTraits>'}</div>
        </div>
        <div className="tag-wrapper">
          <div className="tag">{'<CodingPrinciples>'}</div>
          <div className="indented-text">
            <li>block block</li>
            <li>block block</li>
            <li>block block</li>
            <li>block block</li>
          </div>
          <div className="tag">{'</CodingPrinciples>'}</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
