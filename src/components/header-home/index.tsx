import React from 'react';
import './style.css';

/**
 * Component HeaderHome
 * @return {JSX.Element}
*/
function HeaderHome() {
  return (
    <header className="header__home">
      <h1 className="title__header">
        <span className="green">Bru</span>
        no Pi<span className="red">zza</span></h1>
      <div className="basket__header">
        <i className="icon__basket fas fa-shopping-basket"></i>
        <span className="amount__basket">1</span>
      </div>
    </header>
  );
}

export default HeaderHome;
