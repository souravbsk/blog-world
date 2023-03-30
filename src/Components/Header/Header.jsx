import React from "react";
import "./Header.css";
import userLogo from "../../assets/img/user..jpg"

const Header = () => {
  return (
    <header>
      <nav className="nav-bar">
        <div className="nav-brand">
          <h3>Blog World</h3>
        </div>
        <ul className="nav-bar-item">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Blogs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Register
            </a>
          </li>
          <li className="nav-item">
            <img className="user-logo" src={userLogo} alt="" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
