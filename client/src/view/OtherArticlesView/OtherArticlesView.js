import React from "react";
import config from "../../config";
import "./OtherArticlesView.scss";
import LineOverviewBlog from "../../components/LineOverviewBlog/LineOverviewBlog";

class OtherArticlesView extends React.Component {
  constructor() {
    super();
    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
    let blogPosts = config.domain + "wp-json/wp/v2/" + config.blogPost;
    fetch(blogPosts)
      .then(response => response.json())
      .then(response => {
        this.setState({
          blogPosts: response
        });
      });
  }

  render() {
    return (
      <section className="section fp-auto-height section__other">
        <LineOverviewBlog slug="blog" post={this.state.blogPosts} />
      </section>
    );
  }
}

export default OtherArticlesView;
