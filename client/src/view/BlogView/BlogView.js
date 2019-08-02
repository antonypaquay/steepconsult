import React from "react";
import config from "../../config";
import GridOverviewBlog from "../../components/GridOverviewBlog/GridOverviewBlog";
import Revealer from "../../components/Revealer/Revealer";
import "./Blog.scss";
import { blendMode } from '../../index';

class BlogView extends React.Component {
  constructor() {
    super();
    this.state = {
      blogPosts: []
    };
  }

  componentDidMount() {
  
    blendMode();
    let blogPost = config.domain + "wp-json/wp/v2/" + config.blogPost;
    let blogPage = config.domain + "wp-json/wp/v2/pages/" + config.blogPage;
    fetch(blogPost)
      .then(response => response.json())
      .then(response =>
        this.setState({
          blogPosts: response
        })
      );

    fetch(blogPage)
      .then(reponse => reponse.json())
      .then(reponse =>
        this.setState({
          title: reponse.title.rendered,
          content: reponse.content.rendered
        })
      );
  }

  render() {
    return (
      <section className="swiper-slide section__blog">
        <Revealer />
        <GridOverviewBlog
          title={this.state.title}
          content={this.state.content}
          blogPosts={this.state.blogPosts}
        />
      </section>
    );
  }
}

export default BlogView;
