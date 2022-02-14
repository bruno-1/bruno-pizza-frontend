import { lazy, useEffect, useState } from "react";
import "./style.css"

function Home() {

  const [pizza, setPizza] = useState(Object);

  const HeaderHome = lazy(() => import("../../components/header-home"));
  const Button = lazy(() => import("../../components/button"));
  
  useEffect(() => {    
    async function getPizza() {
      return await fetch('http://localhost:4000/pizza/seafood-pizza');
    }
    
    getPizza().then(pizza => pizza.json()).then((pizza) => {
      setPizza(pizza);
    });
  }, [pizza]);

  
  return (
    <section className="home">
      <HeaderHome />
      <main className="main">
        <section className="pizza__main">
          <h2 className="name__pizza">{pizza.name}</h2>
          <div className="description__pizza">
            <div className="igredients__description">
              <h3 className="title__igredients">Igredients: </h3>
              <p className="igredients__igredients">{pizza.igredients}</p>
            </div>
            <div className="price__description">
              <h3 className="title__price">Price: </h3>
              <span className="green price__price">${pizza.price}</span>
            </div>
          </div>
          <div className="exchange__pizza">
            <button className="left__exchange">
              <i className="icon__left far fa-arrow-alt-circle-left"></i>
            </button>
            <button className="right__exchange">
              <i className="icon__right far fa-arrow-alt-circle-right"></i>
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <img className="image__footer" src="./images/seafood-pizza.png" alt="Seafood Pizza" />
        <Button >GO TO MENU</Button>
      </footer>
    </section>
  )
}

export default Home;