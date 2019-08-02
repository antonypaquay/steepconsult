import React from "react";
import WOW from "wowjs";

class ContentTextScroll extends React.Component {
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow", // default
      animateClass: "animated", // default
      offset: 0, // default
      mobile: false, // default
      live: true // default
    }).init();
  }

  render() {
    return (
      <div
        className="scroll__content wow fadeInYo"
        data-wow-delay="1s"
        data-wow-duration=".8s"
      >
        <span className="greyLabel">{this.props.label}</span>

        <h1
          className="scroll__content__title"
          dangerouslySetInnerHTML={{ __html: this.props.title }}
        />

        <div
          className="scroll__content__post"
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        />
      </div>
    );
  }
}

export default ContentTextScroll;
