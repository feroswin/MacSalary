import React from 'react';
import '../../styles/Header/NavItem.css'

const NavItem = ({children}) => {
  return (
    <a href="#" className="nav-item">
      {children}
    </a>
  );
};

export default NavItem;