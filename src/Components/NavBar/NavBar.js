import "./NavBar.css"
import React from "react"
import {Link} from "react-router-dom";

let NavBar = () => {
 return(
    <nav>
  <ul>
  <a href="index.html" className="nav__logo">Trek Buddy</a>
    <li><Link className="nav-link" to="/">Home</Link> </li>
    <li><Link className="nav-link" to="/Destinations">Destinations</Link> </li>
    <li><a href="#contact">Contact</a></li>
    <span className="signup">
    <Link className="btn nav-link" to="/signup">Sign Up</Link>
    </span>
    <span className="login">
    <Link className="btn nav-link" to="/login">Login</Link>
    </span>
    </ul>
</nav>
 )
}
export default NavBar