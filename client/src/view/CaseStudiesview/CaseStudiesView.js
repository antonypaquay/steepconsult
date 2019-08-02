import React from "react";
import config from "../../config";
import Revealer from "../../components/Revealer/Revealer";
import GridOverviewCase from "../../components/GridOverviewCase/GridOverviewCase";
import "../BlogView/Blog.scss";

class CaseStudiesView extends React.Component {
  constructor() {
    super();
    this.state = {
      casestudies: []
    };
  }


  componentDidMount() {
    let casePosts = config.domain + "wp-json/wp/v2/" + config.casePosts;
    let casePage = config.domain + "wp-json/wp/v2/pages/" + config.casePage;
    fetch(casePosts)
      .then(response => response.json())
      .then(response => {
        this.setState({
          casestudies: response
        });
      });
    fetch(casePage)
      .then(response => response.json())
      .then(response => {
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered
        });
      });
  }

  render() {
    return (
      <section className="section section__blog">
        <Revealer/>
        <GridOverviewCase
          title={this.state.title}
          content={this.state.content}
          casestudies={this.state.casestudies}
        />
    </section>
    );
  }
}

export default CaseStudiesView;
