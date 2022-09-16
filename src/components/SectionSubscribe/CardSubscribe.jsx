import React from 'react';
import '../../styles/SectionSubscribe/CardSubscribe.css'
import Cross from "../UI/Cross/Cross";
import CheckMark from "../UI/CheckMark/CheckMark";
import MyButton from "../UI/MyButton/MyButton";

const CardSubscribe = ({price, title, description, settings}) => {

  return (
    <div className="card-subscribe">
      <div className="price-card">
        <div className="price">{price} ₽</div>
        <div className="price-per-month">/мес.</div>
      </div>
      <div className="card-title">{title}</div>
      <div className="description">{description}</div>
      <hr className="line-card"/>
      <div className="subscribe-features">
        <div className="row-feature">
          {settings.feature ? <CheckMark/> : <Cross/>}
          <div className="title-feature">Вычет налогов и обедов</div>
          {/*{settings.feature3 || <Cross/>*/}
          {/*}*/}
          {/*{settings.feature4 || <Cross/>}*/}
        </div>
        <div className="row-feature">
          {settings.feature2 ? <CheckMark/> : <Cross/>}
          <div className="title-feature">Расчет месячной зарплаты</div>
        </div>
        <div className="row-feature">
          {settings.feature3 ? <CheckMark/> : <Cross/>}
          <div className="title-feature">Подробная информация о доходах</div>
        </div>
        <div className="row-feature">
          {settings.feature4 ? <CheckMark/> : <Cross/>}
          <div className="title-feature">Выгрузка в Excel</div>
        </div>
      </div>
      <MyButton className="btn btn-card-order-sub">
        Оформить подписку
      </MyButton>
    </div>
  );
};

export default CardSubscribe;