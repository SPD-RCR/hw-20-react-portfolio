import React from "react";
import nav from "react-bootstrap/nav";

const Header = () => (
  <div className="container">
  <ul id="gn-menu" className="gn-menu-main">
    <li className="gn-trigger">
      <a className="gn-icon gn-icon-menu"><span>Menu</span></a>
      <nav className="gn-menu-wrapper">
        <div className="gn-scroller">
          <ul className="gn-menu">
            <li className="gn-search-item">
              <input placeholder="Search" type="search" className="gn-search" />
              <a className="gn-icon gn-icon-search"><span>Search</span></a>
            </li>
            <li><a href={"#home"} className="gn-icon gn-icon-home smoothscroll">Home</a></li>
            <li><a href={"#about"} className="gn-icon gn-icon-archive smoothscroll">About</a></li>
            <li><a href={"#portfolio"} className="gn-icon gn-icon-pictures smoothscroll">Portfolio</a></li>
            <li><a href={"#blog"} className="gn-icon gn-icon-article smoothscroll">Blog</a></li>
            <li><a href={"#contact"} className="gn-icon gn-icon-envelop smoothscroll">Contact</a></li>
          </ul>
        </div>
      </nav>
    </li>
    <li><a href={"#about"} className="gn-icon smoothscroll">Robert George</a></li>
    <li><a href={"#contact"} className="smoothscroll">Freelance</a></li>
  </ul>
  </div>
)

export default Header;