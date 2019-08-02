import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";


const NavCloseWithLink = () => {
  let burger = document.getElementsByClassName("burger"),
    burgerLabel = document.getElementsByClassName("burger__label"),
    navigation = document.getElementsByClassName("navigation");
  burger[0].classList.toggle("burger--active");
  navigation[0].classList.remove("navigation--active");

  let nameMenu = burgerLabel[0];
  if (nameMenu.innerHTML === "Menu") {
    nameMenu.innerHTML = "Close";
  } else {
    nameMenu.innerHTML = "Menu";
  }
};

class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                exact
                to="/"
                activeClassName="navigation__link--active"
                onClick={e => NavCloseWithLink(e)}
              >
                Home
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                to="/about"
                activeClassName="navigation__link--active"
                onClick={e => NavCloseWithLink(e)}
              >
                About
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                to="/expertises"
                activeClassName="navigation__link--active"
                onClick={e => NavCloseWithLink(e)}
              >
                Expertises
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                to="/jobs"
                activeClassName="navigation__link--active"
                onClick={e => NavCloseWithLink(e)}
              >
                Jobs
              </NavLink>
            </li>
            <li className="navigation__list-item">
              <NavLink
                className="navigation__link"
                to="/contact"
                activeClassName="navigation__link--active"
                onClick={e => NavCloseWithLink(e)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
