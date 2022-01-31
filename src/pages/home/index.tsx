import "./style.css"

function Home() {
  return (
    <div className="home">
      <header className="header__home">
        <h1 className="title__header"><span className="title__green">Bru</span>no Pi<span className="title__red">zza</span></h1>
        <div className="basket__header">
          <i className="basket__icon fas fa-shopping-basket"></i>
          <span className="amount__basket">1</span>
        </div>
      </header>
      <main className="pizza">
        <h2 className="name__pizza">Seafood pizza</h2>
        <section className="description__pizza">
          <div className="igredients__description">
            <h3 className="title__igredients">Igredients: </h3>
            <p className="igredients__igredients">tomato sauce, mozzarella cheese, cocktail shrimps, salmon, mussels, lemon, parsley.</p>
          </div>
          <div className="price__description">
            <h3 className="title__price">Price: </h3>
            <span className="price__price">$18.00</span>
          </div>
        </section>
        <section className="exchange__pizza">
          <div className="button__exchange">
            <button className="left__button">
              <i className="icon__left far fa-arrow-alt-circle-left"></i>
            </button>
            <button className="right__button">
              <i className="icon__right far fa-arrow-alt-circle-right"></i>
            </button>
          </div>
        </section>
      </main>
      <footer className="footer">
        <img className="img__footer" src="/images/seafood-pizza.png" alt="Seafood pizza" />
      </footer>
    </div>
  )
}

export default Home;