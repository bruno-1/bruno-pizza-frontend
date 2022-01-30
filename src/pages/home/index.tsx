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
      </main>
    </div>
  )
}

export default Home;