import React from "react";
import config from "../../config";
import LineOverviewCase from "../../components/LineOverviewCase/LineOverviewCase";

class OtherCasesView extends React.Component {
  constructor() {
    super();
    this.state = {
      casestudies: []
    };
  }



  componentDidMount() {
    let casePosts = config.domain + "wp-json/wp/v2/" + config.casePosts;
    fetch(casePosts)
      .then(response => response.json())
      .then(response => {
        this.setState({
          casestudies: response
        });
      });
  }

  render() {
    return (
      <section className="section fp-auto-height section__other">
        <LineOverviewCase slug="case-studies"  post={this.state.casestudies} />
      </section>
    );
  }
}

export default OtherCasesView;
