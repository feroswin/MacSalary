import React from 'react';
import '../../styles/SectionAboutUs/Stat.css'

const Stat = ({value, description}) => {
  return (
    <div className="stat">
      <div className="stat-number">{value}</div>
      <div className="stat-description">{description}</div>
    </div>
  );
};

export default Stat;