import "./style.css"

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1 className="title"><span className="title__green">Bru</span>no Pi<span className="title__red">zza</span></h1>
        <div className="basket">
          <i className="basket__icon fas fa-shopping-basket"></i>
          <span className="amount__basket">1</span>
        </div>
      </header>
      <main className="main">
        <h2 className="pizzaName">Seafood pizza</h2>
        <div className="description"></div>
      </main>
    </div>
  )
}

export default Home;