import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./footer.scss";
import Fb from "./facebook.svg";
import Lk from "./linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer--nav">
        <ul className="footer__list">
          <li className="footer__list-item link--reset">
            <NavLink className="footer__link " to="/about">
              About
            </NavLink>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" to="/expertises">
              Expertises
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link " to="/case-studies">
              Cases
            </Link>
          </li>
          <li className="footer__list-item ">
            <Link className="footer__link" to="/jobs">
              Jobs
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" to="/privacy-policy">
              Privacy
            </Link>
          </li>
          <li className="footer__list-item">
            <Link className="footer__link" to="/legal-terms">
              Legal terms
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer__bottom">
        <div className="footer__logo">
          <svg width="16px" height="26px" viewBox="0 0 43 71">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                className="logo"
                id="logo"
                transform="translate(1.000000, 1.000000)"
                stroke="#ffffff"
                strokeWidth="3.01012647"
              >
                <g>
                  <path d="M29.6,4.7 C29.6,4.7 9.6,0.6 9.5,13 C9.5,18.7 15.5,23.8 19.1,26.5 L32,37.8" />
                  <path d="M12.6,64.2 C12.6,64.2 32.5,68.3 32.6,55.9 C32.7,50.2 26.6,45.1 23.1,42.4 L8.4,29.4" />
                  <circle cx="32.3" cy="4.5" r="4" />
                  <circle cx="8.4" cy="63.6" r="4" />
                  <circle cx="36.4" cy="40.2" r="4" />
                  <circle cx="4.5" cy="27" r="4" />
                </g>
              </g>
            </g>
          </svg>
        </div>

        <small className="footer__copyright">
          <a
            href="https://worldofdigits.com/"
            target="__blank"
            rel="noopener noreferrer"
          >
            Design &amp; Development by World of Digits
          </a>
        </small>

        <ul className="social__network">
          <li className="social__network__elt">
            <a
              href="https://www.facebook.com/SteepConsult/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Fb} alt="facebook" />
            </a>
          </li>
          <li className="social__network__elt">
            <a
              href="https://www.linkedin.com/company/steepconsult/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Lk} alt="linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
