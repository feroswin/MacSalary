import React from 'react';
import Stat from "./Stat";
import '../../styles/SectionAboutUs/StatList.css'

const StatList = () => {
  return (
    <div className="stat-list">
      <Stat value="2022" description="год создания"/>
      <Stat value=">2000" description="пользователей"/>
      <Stat value=">250" description="предприятий партнеров"/>
      <Stat value=">320" description="новостей"/>
      <Stat value=">50" description="отзывов на Reddit"/>
      <Stat value="3" description="плана подписки"/>
    </div>
  );
};

export default StatList;