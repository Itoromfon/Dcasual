import React from "react"
import "./Style.css"
import { Link } from "react-router-dom"

function Nav() {

  const navStyle = {
    color: "#f2f2f2",
    textDecoration: "none"
  }

  return(
    <div>
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link to="/about" style={navStyle}>
          <li>About</li>
          </Link>
          <Link to="/shop" style={navStyle}>
          <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Nav