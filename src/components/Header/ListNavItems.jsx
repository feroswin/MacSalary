import React from 'react';
import NavItem from "./NavItem";
import MyButton from "../UI/MyButton/MyButton";

const ListNavItems = () => {
  return (
    <>
      <NavItem>Главная</NavItem>
      <NavItem>Подписки</NavItem>
      <NavItem>Новости</NavItem>
      <NavItem>О нас</NavItem>
      <MyButton className="btn btn-login">Вход</MyButton>
    </>
  );
};

export default ListNavItems;