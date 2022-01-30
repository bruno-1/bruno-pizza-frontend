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
        <div className="description__pizza">
          <div className="igredients__pizza"></div>
        </div>
      </main>
    </div>
  )
}

export default Home;