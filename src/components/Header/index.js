import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
  const a = 0

  return (
    <div className="header">
      <div className="logo_contianer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo"
        />
        <h1 className="nav_links">Wave</h1>
      </div>
      <div>
        <Link to="/" className="nav_links">
          Home
        </Link>
        <Link to="/about" className="nav_links">
          About
        </Link>
        <Link to="/contact" className="nav_links">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
