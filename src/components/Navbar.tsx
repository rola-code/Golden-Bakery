import logo from '../assets/logo.webp'

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="left">
          <li><a href="#about">HOME</a></li>
          <li><a href="#menu">MENU</a></li>
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