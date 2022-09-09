import React from 'react';
import '../../styles/Header/Header.css'
import Head from "./Head";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Head/>
      </div>
    </header>
  );
};

export default Header;