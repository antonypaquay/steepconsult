import React from "react";
import "./TopBar.scss";
import { Link } from "react-router-dom";


const burgerChange = e => {
  let burger = document.getElementsByClassName("burger"),
    burgerLabel = document.getElementsByClassName("burger__label"),
    navigation = document.getElementsByClassName("navigation");
  burger[0].classList.toggle("burger--active");
  navigation[0].classList.toggle("navigation--active");
  let nameMenu = burgerLabel[0];
  if (nameMenu.innerHTML === "Menu") {
    nameMenu.innerHTML = "Close";
  } else {
    nameMenu.innerHTML = "Menu";
  }
};

export default function TopBar() {
  return (
    <div className="top__bar">
      <div className="top__bar__center">
        <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 194.4 60">
            <g>
              <g>
                <path d="M15.8,29.5A37.9,37.9,0,0,1,11,27.4a5.9,5.9,0,0,0,.2-1.4,5.6,5.6,0,0,0-5.6-5.5,5.6,5.6,0,1,0,0,11.1,5.5,5.5,0,0,0,4.3-2.1L15,31.7c6.4,2.5,15.2,6,15.5,11.7s-3,7.2-6.3,8.4a5.5,5.5,0,0,0-4.9-3,5.6,5.6,0,1,0,5.6,5.6V54c5.5-1.9,8.3-5.7,8-10.7C32.4,36.1,22.8,32.3,15.8,29.5ZM5.6,29a3,3,0,1,1,0-5.9A2.9,2.9,0,0,1,8.5,26a2.8,2.8,0,0,1-.3,1.3A2.8,2.8,0,0,1,5.6,29ZM19.3,57.3a2.9,2.9,0,0,1-2.9-2.9,3,3,0,0,1,2.9-3,3.1,3.1,0,0,1,2.9,2.2c0,.3.1.5.1.8A3,3,0,0,1,19.3,57.3Z" />
                <path d="M37.1,28.3a5.6,5.6,0,0,0-4.3,2.1c-1.4-.7-3.2-1.3-5.1-2.1-6.4-2.6-15.2-6-15.6-11.8-.2-3.7,1.7-6.4,5.8-8.1a5.4,5.4,0,0,0,4.7,2.8,5.7,5.7,0,0,0,5.6-5.6,5.6,5.6,0,1,0-11.1,0v.6c-5,2-7.6,5.7-7.3,10.5.5,7.2,10,11,17,13.8l4.9,2a6.8,6.8,0,0,0-.2,1.4,5.6,5.6,0,1,0,5.6-5.6ZM22.6,2.6a3,3,0,0,1,3,3,2.9,2.9,0,0,1-3,2.9,3,3,0,0,1-2.8-2,2.8,2.8,0,0,1-.1-.9A3,3,0,0,1,22.6,2.6ZM37.1,36.9a3,3,0,0,1-2.9-3,2.9,2.9,0,0,1,5.8,0A3,3,0,0,1,37.1,36.9Z" />
              </g>
              <g>
                <path d="M75,21.3a8.7,8.7,0,0,0-2.3,1.6,9.1,9.1,0,0,0-1.5,2.3,5.9,5.9,0,0,0-.5,2.7,6.1,6.1,0,0,0,.5,2.8A7.6,7.6,0,0,0,72.7,33,8.7,8.7,0,0,0,75,34.6a8.7,8.7,0,0,0,2.8.5h4.3a4.2,4.2,0,0,1,3,1.2,4.2,4.2,0,0,1,1.3,3.1,3.8,3.8,0,0,1-1.3,3,4.2,4.2,0,0,1-3,1.3H70.6v2.9H82.1a6.7,6.7,0,0,0,2.8-.6,5.7,5.7,0,0,0,2.3-1.5,7.6,7.6,0,0,0,1.5-2.3,6.4,6.4,0,0,0,.5-2.8,6.6,6.6,0,0,0-.5-2.8,11.4,11.4,0,0,0-1.5-2.3,7.3,7.3,0,0,0-2.3-1.6,8.7,8.7,0,0,0-2.8-.5H77.8a4.3,4.3,0,0,1-4.3-4.3,4.3,4.3,0,0,1,1.3-3,4.4,4.4,0,0,1,3-1.2H89.2V20.8H77.8A9.2,9.2,0,0,0,75,21.3Z" />
                <path d="M101.9,9.3H99.1V37.2a8.6,8.6,0,0,0,.7,3.6,9.3,9.3,0,0,0,2,3,10.2,10.2,0,0,0,3,2.1,10.5,10.5,0,0,0,3.6.7h2.2V43.7h-2.5a6.1,6.1,0,0,1-4.4-1.9,6.5,6.5,0,0,1-1.8-4.6V23.7h8.7V20.8h-8.7Z" />
                <path d="M136.2,23.6a8.3,8.3,0,0,0-3-2,8.7,8.7,0,0,0-7.3,0,7.2,7.2,0,0,0-2.9,2,10.2,10.2,0,0,0-2.1,3,11,11,0,0,0-.7,3.6v7.1a10.5,10.5,0,0,0,.7,3.6,8.1,8.1,0,0,0,2.1,3,10.5,10.5,0,0,0,3,2,9,9,0,0,0,3.7.7h9.2V43.7h-9.2a6.5,6.5,0,0,1-4.6-1.8,6,6,0,0,1-1.9-4.6V35.2h15.7V30.1a8.1,8.1,0,0,0-.7-3.5A12.1,12.1,0,0,0,136.2,23.6Zm-.3,8.6H123.2V30.1a6,6,0,0,1,1.9-4.5,6.1,6.1,0,0,1,4.5-1.8,6,6,0,0,1,4.4,1.8,6,6,0,0,1,1.9,4.5Z" />
                <path d="M163.6,23.6a7.2,7.2,0,0,0-2.9-2,9.5,9.5,0,0,0-3.7-.8,9,9,0,0,0-3.6.8,7.2,7.2,0,0,0-2.9,2,9,9,0,0,0-2.1,3,8.6,8.6,0,0,0-.7,3.6v7.1a8.6,8.6,0,0,0,.7,3.6,9.3,9.3,0,0,0,2,3,11,11,0,0,0,3.1,2,9.4,9.4,0,0,0,3.7.7h9.2V43.7h-9.2a6.5,6.5,0,0,1-4.6-1.8,6.2,6.2,0,0,1-1.9-4.6V35.2h15.7V30.1a8.4,8.4,0,0,0-.7-3.5A9,9,0,0,0,163.6,23.6Zm-.2,8.6H150.7V30.1a5.8,5.8,0,0,1,1.9-4.5,6.1,6.1,0,0,1,4.5-1.8,6,6,0,0,1,4.4,1.8,6,6,0,0,1,1.9,4.5Z" />
                <path d="M193.7,26.5a10.2,10.2,0,0,0-2.1-3,10,10,0,0,0-2.9-2,9.3,9.3,0,0,0-7.3,0,12.1,12.1,0,0,0-3,2,12.1,12.1,0,0,0-2,3,9.4,9.4,0,0,0-.7,3.7V56.8h2.9V46.6h6.5a8.6,8.6,0,0,0,3.6-.7,7.7,7.7,0,0,0,3-1.9,12.1,12.1,0,0,0,2-3,8.6,8.6,0,0,0,.7-3.6V30.2A11.1,11.1,0,0,0,193.7,26.5Zm-2.2,10.9a6,6,0,0,1-1.9,4.5,6.1,6.1,0,0,1-4.5,1.8h-6.5V30a6.2,6.2,0,0,1,1.9-4.5,6.5,6.5,0,0,1,4.6-1.8,6,6,0,0,1,4.5,1.9,6.2,6.2,0,0,1,1.9,4.6Z" />
              </g>
            </g>
          </svg>
        </Link>
        <div className="burger" onClick={e => burgerChange(e)}>
          <div className="burger__label">Menu</div>
          <div className="burger__el">
            <div className="burger__el__span">
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
