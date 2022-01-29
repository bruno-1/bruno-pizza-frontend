import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1 className="title"><span className="title__green">Bru</span>no Pi<span className="title__red">zza</span></h1>
      <i className="basketIcon fas fa-shopping-basket"></i>
    </header>
  );
}

export default Header;