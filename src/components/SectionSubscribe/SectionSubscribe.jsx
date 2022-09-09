import React, {useState} from 'react';
import '../../styles/SectionSubscribe/SectionSubscribe.css'
import CardSubscribe from "./CardSubscribe";

const SectionSubscribe = () => {

  const [infoCard, setInfoCard] = useState([
    {price: 0, title: 'Упрощенная подписка', description: 'Подписка предназначена для ознакомления с нашим проектом', settings: {feature: true, feature2: true, feature3: false, feature4: false}},
    {price: 50, title: 'Базовая подписка', description: 'Подписка предоставляет все услуги за исключением некоторых', settings: {feature: true, feature2: true, feature3: true, feature4: false}},
    {price: 100, title: 'Расширенная подписка', description: 'Подписка предоставляет все услуги нашего проекта + выгрузка в Excel', settings: {feature: true, feature2: true, feature3: true, feature4: true}}
  ])

  const [prodFeatures, SetProdFeatures] = useState([])

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
    </section>
  );
};

export default SectionSubscribe;