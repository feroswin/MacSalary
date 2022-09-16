import React from 'react';
import LogoCompany from "../Header/LogoCompany";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-head">
          <LogoCompany/>
          <div className="name-company">MacSalary</div>
        </div>
        <div className="content-footer">
          <div className="main-content-footer">
            <div className="col">
              <div className="col-title">«MacSalary»</div>
              <a className="footer-link" href="#">Главная</a>
              <a className="footer-link" href="#">Наши подписки</a>
              <a className="footer-link" href="#">Новости</a>
              <a className="footer-link" href="#">Информация о нас</a>
            </div>
          </div>
          <div className="contact-content-footer">

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;