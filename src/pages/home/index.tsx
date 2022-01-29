import "./style.css"

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1 className="title"><span className="title__green">Bru</span>no Pi<span className="title__red">zza</span></h1>
        <i className="basketIcon fas fa-shopping-basket"></i>
      </header>
      <main className="main">
        <h2 className="pizza-name">Seafood pizza</h2>
        <div className="description"></div>
      </main>
    </div>
  )
}

export default Home;