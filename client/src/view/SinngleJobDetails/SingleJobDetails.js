import React from "react";
import ScrollRightContainer from "../../components/ScrollRightContainer/ScrollRightContainer";



class SingleJobDetails extends React.Component {

  render() {
    return (
      <React.Fragment>
        <section className="section section__duoText ">
          <ScrollRightContainer
            label="About the job"
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

export default SingleJobDetails;
