import React from 'react';

import '../App.scss';

type EmployerCardProps = {
  data: string;
};

const Experience = ({ data }: EmployerCardProps) => {
  return (
    <div className="experience">
      <div className="experience-title">Experience #1</div>
    </div>
  );
};

export default Experience;
