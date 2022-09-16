import React from 'react';
import StatList from "./StatList";
import '../../styles/SectionAboutUs/SectionAboutUs.css'

const SectionAboutUs = () => {
  return (
    <section className="section-about-us">
      <div className="container">
        <div className="title-section">О нас</div>
        <StatList/>
      </div>
      
    </section>
  );
};

export default SectionAboutUs;