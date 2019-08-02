import React from "react";
import "./ScrollHoriz.scss";

const ScrollHoriz = props => {


  return (
    <div className="scrolldown__horizontal">
      <div className="scrolldown__horizontal__block">
        <label>{props.label}</label>
        <div className="spinner">
          <svg
            className="spinner__unactive"
            width="43px"
            height="43px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            />
          </svg>
          <svg
            className="spinner__progress"
            width="43px"
            height="43px"
            viewBox="0 0 66 66"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              fill="none"
              strokeWidth="6"
              strokeLinecap="round"
              cx="33"
              cy="33"
              r="30"
            />
          </svg>
          <svg className="arrow" width="14px" height="9px" viewBox="0 0 14 9">
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="slider-arrow-/-type-1-/-normal"
                transform="translate(-15.000000, -17.000000)"
                fill="#010101"
              >
                <path
                  d="M25.6470588,21.5 C25.6470588,21.6042084 25.5945017,21.7214429 25.5156661,21.7995992 L19.3927633,27.8697395 C19.3139276,27.9478958 19.1956741,28 19.0905599,28 C18.9854457,28 18.8671922,27.9478958 18.7883566,27.8697395 L18.1313928,27.2184369 C18.0525571,27.1402806 18,27.0360721 18,26.9188377 C18,26.8146293 18.0525571,26.6973948 18.1313928,26.6192385 L23.2951284,21.5 L18.1313928,16.3807615 C18.0525571,16.3026052 18,16.1853707 18,16.0811623 C18,15.9769539 18.0525571,15.8597194 18.1313928,15.7815631 L18.7883566,15.1302605 C18.8671922,15.0521042 18.9854457,15 19.0905599,15 C19.1956741,15 19.3139276,15.0521042 19.3927633,15.1302605 L25.5156661,21.2004008 C25.5945017,21.2785571 25.6470588,21.3957916 25.6470588,21.5 Z"
                  id=""
                  transform="translate(21.823529, 21.500000) rotate(-270.000000) translate(-21.823529, -21.500000) "
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ScrollHoriz;
