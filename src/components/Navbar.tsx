import logo from '../assets/logo.webp'

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="left">
<a href="#about">HOME</a><a href="#menu">MENU</a>
        </ul>

        <div className="logo">
          <img src={logo} alt="GoldenBakery logo" />
        </div>

        <ul className="right">
          <li><a href="#">LOCATION</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar