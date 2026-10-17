import "./Navigation.css"

function Navbar() {
  return (
    <nav className="navbar">

      <h2>
        DEV@Deakin
      </h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        
      </div>

    </nav>
  )
}

export default Navbar