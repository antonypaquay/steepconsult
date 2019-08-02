import React from "react";
import ScrollRightContainer from "../../components/ScrollRightContainer/ScrollRightContainer";
import "./AboutSteep.scss";

class AboutSteep extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <section className="section__duoText">
        <ScrollRightContainer
          title={this.props.title}
          content={this.props.content}
          imgDesktop={this.props.imgDesktop}
          imgIpad={this.props.imgIpad}
          label={this.props.label}
        />
      </section>
    );
  }
}

export default AboutSteep;
