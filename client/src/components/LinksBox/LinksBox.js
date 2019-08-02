import React from "react";
import "./LinksBox.scss";
import { Link } from "react-router-dom";
import ArrowRightGreen from "./arrow-right-green.svg";
import ArrowRightWhite from "./arrow-right-white.svg";

const LinksBox = props => {
  let { textLeft, textRight } = props;

  return (
    <div className="linksbox">
      <Link to="/expertises" className="linksbox__block">
        <div className="content">
          <h3 className="content__title">{props.titleLeft}</h3>
          <div
            className="content__text mt"
            dangerouslySetInnerHTML={{ __html: textLeft }}
          />
          <div className="arrow__animation">
            <img src={ArrowRightWhite} alt="arrow-right-white" />
            <img src={ArrowRightGreen} alt="arrow-right-blue" />
          </div>
        </div>
      </Link>

      <Link to="/about" className="linksbox__block">
        <div className="content">
          <h3 className="content__title">{props.titleRight}</h3>
          <div
            className="content__text"
            dangerouslySetInnerHTML={{ __html: textRight }}
          />
          <div className="arrow__animation">
            <img src={ArrowRightWhite} alt="arrow-right-white" />
            <img src={ArrowRightGreen} alt="arrow-right-blue" />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LinksBox;
