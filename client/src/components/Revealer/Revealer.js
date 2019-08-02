import React from "react";
import { Expo, TimelineLite } from "gsap/TweenMax";

const revealerLayer1 = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#141414",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "9999"
};

const revealerLayer2 = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#39938E",
  position: "fixed",
  top: "0",
  left: "0",
  zIndex: "9998"
};

const revealerMask = {
  width: "100%",
  height: "100vh",
  backgroundColor: "#3B9E99",
  position: "fixed",
  top: 0,
  left: 0,
  zIndex: "9997"
};

class Revealer extends React.Component {
  constructor(props) {
    super(props);
    this.revealer__layer1 = null;
    this.revealer__layer2 = null;
    this.revealer__mask = null;
    this.myTween = null;
  }

  componentDidMount() {
    let speed = 0.3; //0.3
    this.myTween = new TimelineLite({ paused: false })
      .from(this.revealer__mask, speed, {
        transformOrigin: "top left",
        ease: Expo.easeInOut
      })
      .from(this.revealer__layer1, speed, {
        scaleX: 0,
        transformOrigin: "top right",
        ease: Expo.easeInOut
      })
      .from(this.revealer__layer2, speed, {
        delay: -0.1,
        scaleX: 0,
        transformOrigin: "top right",
        ease: Expo.easeInOut
      })
      .to(this.revealer__layer1, speed, {
        scaleX: 1,
        transformOrigin: "top right",
        ease: Expo.easeInOut
      })
      .to(this.revealer__mask, speed, {
        transformOrigin: "top left",
        x: "-100%",
        ease: Expo.easeInOut
      });
  }

  render() {
    return (
      <div
        className="revealer__mask"
        style={revealerMask}
        ref={div => (this.revealer__mask = div)}
      >
        <div
          className="revealer__layer1"
          style={revealerLayer2}
          ref={div => (this.revealer__layer1 = div)}
        />
        <div
          className="revealer__layer2"
          style={revealerLayer1}
          ref={div => (this.revealer__layer2 = div)}
        />
      </div>
    );
  }
}

export default Revealer;
