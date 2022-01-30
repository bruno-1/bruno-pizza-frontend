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
        <img className="img__footer" src="https://png2.cleanpng.com/dy/3c2df8749ee049cc6e09ea9d2cebb011/L0KzQYm3UsI5N5p6j5H0aYP2gLBuTgBqgqtmRdt9YXzscbA0gCVqe5pzfZ9saHX1gsq0lP9uaaV0ReZqa3Wwf8b7TgBme6V0ReVuYXbyf7W0kPl7gpIyTdMENnWzdIK8VcZna2kzSakDM0e4RYW4VcE6QGQ8S6s8M0WxgLBu/kisspng-pizza-italian-cuisine-cherry-tomato-take-out-pesto-seafood-pizza-5a96e0d1556fc8.17837554151983739335.png" alt="Seafood pizza" />
      </footer>
    </div>
  )
}

export default Home;