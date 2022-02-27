import React from 'react';
import Logo from '../logo';
import './style.css';

/**
 * Component HeaderHome
 * @return {JSX.Element}
*/
function HeaderHome() {
  return (
    <header className="header__home">
      <Logo className="logo__header"/>
      <div className="basket__header">
        <i className="icon__basket fas fa-shopping-basket"></i>
        <span className="amount__basket">1</span>
      </div>
    </header>
  );
}

export default HeaderHome;
