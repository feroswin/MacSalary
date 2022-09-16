import React from 'react';
import SlideNews from "./SlideNews";
import '../../styles/SectionNews/SlideNewsList.css'

const SlideNewsList = () => {
  return (
    <div className="slider-news-list">
      <SlideNews/>
      <SlideNews/>
      <SlideNews/>
      <SlideNews/>
    </div>
  );
};

export default SlideNewsList;