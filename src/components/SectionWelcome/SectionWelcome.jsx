import React from 'react';
import '../../styles/SectionWelcome/SectionWelcome.css';
import '../../styles/SectionWelcome/SectionWelcome.css';
import MyButton from "../UI/MyButton/MyButton";

const SectionWelcome = () => {
  return (
    <section className="section-welcome">
      <div className="gradient"/>
      <div className="container">
        <div className="content-welcome">
          <div className="title-welcome">Считай <br/>зарплату <br/>в пару кликов</div>
          <div className="description-welcome">
            <div className="text-welcome">Оформите подписку в личном кабинете - пройдите проверку - <br/>
              и получите подписку на наш сервис <strong>с 50% скидкой</strong></div>
            <MyButton className="btn-registration">
              Оформить подписку
            </MyButton>
          </div>
          <div className="description-welcome">
            <div className="register-welcome">
              <strong>Проект "MacSalary"</strong>
              <div className="text-welcome">Зарегистрируйте личный кабинет - пройдите проверку -
                и выберите необходимую подписку</div>
            </div>
            <MyButton className="btn-registration">
              Регистрация
            </MyButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWelcome;