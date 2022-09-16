import React from 'react';
import SliderNews from "./SliderNews";
import '../../styles/SectionNews/SectionNews.css'

const SectionNews = () => {
  return (
    <section className="section-news">
      <svg className="line-news" width="138" height="484" viewBox="0 0 138 484" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-141 45.5029C-104.667 42.5029 150.3 -45.4971 135.5 34.5029C117 134.503 91.4428 10.1379 40 110C-19.5 225.503 -176 77.0029 -63 225.503C50 374.003 7.43697 115.682 114 330.5C145.5 394 36 510.003 -35 476.003" stroke="#EF0008" stroke-width="2"/>
      </svg>
      <div className="container">
        <div className="title-section">Новости</div>
        <SliderNews/>
      </div>
    </section>
  );
};

export default SectionNews;