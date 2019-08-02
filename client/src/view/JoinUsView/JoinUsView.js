import React from "react";
import ScrollHoriz from "../../components/ScrollHoriz/ScrollHoriz";
import Revealer from "../../components/Revealer/Revealer";
import "./JoinUs.scss";
import JoinWhy from "../JoinWhy/JoinWhy";
import JoinUsFormView from "../JoinUsFormView/JoinUsFormView";
import Footer from "../../components/Footer/Footer";
import { blendMode, resetTop } from "../../index";

class JoinUsView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    blendMode();
    resetTop();
  }

  render() {
    return (
      <React.Fragment>
        <Revealer />
        <ScrollHoriz label="Explore" />
        <JoinWhy />
        <JoinUsFormView />
        <Footer />
      </React.Fragment>
    );
  }
}

export default JoinUsView;
