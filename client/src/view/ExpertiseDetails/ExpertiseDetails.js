import React from "react";
import ScrollRightContainer from "../../components/ScrollRightContainer/ScrollRightContainer";

class ExpertiseDetails extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="section fp-auto-height grid--job section__duoText fix--only">
          <ScrollRightContainer
            title={this.props.detailsTitle}
            content={this.props.detailsContent}
            imgDesktop={this.props.detailsimgDesktop}
            imgIpad={this.props.detailsimgIpad}
          />
        </section>
      </React.Fragment>
    );
  }
}

export default ExpertiseDetails;
