import React from 'react';
import '../../styles/SectionNews/SlideNews.css'
import PhotoNews from "./PhotoNews";
import ReadMore from "./ReadMore";

const SlideNews = () => {

  return (
    <div className="news">
      <div className="news-photo">
        <PhotoNews/>
      </div>
      <div className="news-content">
        <div className="news-content-head">
          <div>Функионал</div>
          <div>1 день назад</div>
        </div>
        <div className="title-news">Добавлена новая функция для вычета обедов</div>
        <div className="description-news">В разделе вычет обедов появилась новая функция, которая упрощает подсчет зарабатной платы и др.</div>
        <ReadMore/>
      </div>
      
    </div>
  );
};

export default SlideNews;