import React from "react";
import Revealer from "../../components/Revealer/Revealer";
import { Link } from "react-router-dom";
import "./VideoView.scss";

class VideoView extends React.Component {


  render() {
    return (
      <div className="grid--video">
        <Revealer />
        <div className="container__video">
          <iframe
            title="steep-video"
            src="https://player.vimeo.com/video/249507661?autoplay=1&title=0&byline=0&portrait=0"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        <script src="https://player.vimeo.com/api/player.js" />
        <Link className="btn__close" to="/">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="times"
            className="svg-inline--fa fa-times fa-w-11"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 352 512"
          >
            <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
          </svg>
        </Link>
      </div>
    );
  }
}

export default VideoView;
