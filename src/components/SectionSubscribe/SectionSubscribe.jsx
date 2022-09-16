import React, {useState} from 'react';
import '../../styles/SectionSubscribe/SectionSubscribe.css'
import CardSubscribe from "./CardSubscribe";

const SectionSubscribe = () => {

  const [infoCard, setInfoCard] = useState([
    {price: 0, title: 'Упрощенная подписка', description: 'Подписка предназначена для ознакомления с нашим проектом', settings: {feature: true, feature2: true, feature3: false, feature4: false}},
    {price: 50, title: 'Базовая подписка', description: 'Подписка предоставляет все услуги за исключением некоторых', settings: {feature: true, feature2: true, feature3: true, feature4: false}},
    {price: 100, title: 'Расширенная подписка', description: 'Подписка предоставляет все услуги нашего проекта + выгрузка в Excel', settings: {feature: true, feature2: true, feature3: true, feature4: true}}
  ])


  return (
    <section className="section-subscribe">
      <div className="container">
        <div className="title-section">Наши подписки</div>
        <div className="cards-subscribe">
          {infoCard.map(item =>
            <CardSubscribe price={item.price} title={item.title} description={item.description} settings={item.settings} key={item.title}/>
          )}
        </div>
      </div>
      <svg width="168" height="727" viewBox="0 0 168 727" fill="none" xmlns="http://www.w3.org/2000/svg" className="line-subscribe">
        <path d="M358.5 183.5C338 125 257.5 91.5 151.5 26C60.0016 -30.5386 -48.0004 11 26.4996 136C101 261 143 210.5 126.5 325C110 439.5 -0.500305 417 18.9997 506.5C34.5997 578.1 152.333 727.5 192 725" stroke="#FFB300" strokeWidth="2"/>
      </svg>
    </section>
  );
};

export default SectionSubscribe;