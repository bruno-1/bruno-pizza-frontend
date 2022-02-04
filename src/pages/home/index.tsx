import Button from "../../components/button";
import "./style.css"

function Home() {
  return (
    <section className="home">
      <header className="header__home">
        <h1 className="title__header"><span className="green">Bru</span>no Pi<span className="red">zza</span></h1>
        <div className="basket__header">
          <i className="icon__basket fas fa-shopping-basket"></i>
          <span className="amount__basket">1</span>
        </div>
      </header>
      <main className="main">
        <section className="pizza__main">
          <h2 className="name__pizza">Seafood pizza</h2>
          <div className="description__pizza">
            <div className="igredients__description">
              <h3 className="title__igredients">Igredients: </h3>
              <p className="igredients__igredients">tomato sauce, mozzarella cheese, cocktail shrimps, salmon, mussels, lemon, parsley.</p>
            </div>
            <div className="price__description">
              <h3 className="title__price">Price: </h3>
              <span className="green price__price">$18.00</span>
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