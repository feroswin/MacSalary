import React from 'react';
import Nav from "./Nav";
import LogoCompany from "./LogoCompany";
import '../../styles/Header/Head.css'

const Head = () => {
  return (
    <div className="head">
      <LogoCompany/>
      <Nav/>
    </div>
  );
};

export default Head;