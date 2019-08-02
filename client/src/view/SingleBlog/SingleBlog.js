import React from "react";
import Revealer from "../../components/Revealer/Revealer";
import config from "../../config";
import "./singleBlog.scss";
import SingleArticlesDetails from "../SingleArticleDetails/SingleArticleDetails";
import OtherArticlesView from "../OtherArticlesView/OtherArticlesView";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { blendMode, resetTop } from "../../index";

class SingleBlog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    let expertisesURL = `${config.domain}/wp-json/wp/v2/${
      config.blogPost
    }?slug=${id}`;
    fetch(expertisesURL)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response[0].title.rendered,
          content: response[0].content.rendered
        })
      );
    let blogPosts = config.domain + "wp-json/wp/v2/" + config.blogPost;
    fetch(blogPosts)
      .then(response => response.json())
      .then(response => {
        this.setState({
          blogPosts: response
        });
      });

    blendMode();
    resetTop();
  }

  render() {
    return (
      <React.Fragment>
        <Revealer />
        <div class="post__navigation">
          <Link
        
            class="post-nav__prev"
            to={{
              pathname: "/blog"
            }}
          >
            <svg width="20px" height="9px" viewBox="0 0 20 9">
              <g id="Symbols" stroke="none" stroke-width="1">
                <g
                  id="slider-/-expertises"
                  transform="translate(-1378.000000, -522.000000)"
                >
                  <g id="Group" transform="translate(1378.000000, 494.000000)">
                    <path
                      d="M19.2857373,32.2491788 C19.2857373,32.3496253 19.2410944,32.4500719 19.17413,32.5170362 L14.8884106,36.4679338 C14.7768033,36.5683803 14.6317139,36.5907018 14.4977851,36.5348982 C14.3750171,36.4790945 14.2857313,36.3563265 14.2857313,36.2112371 L14.2857313,33.7112341 L0.357143283,33.7112341 C0.156250186,33.7112341 0,33.5549839 0,33.3540908 L0,31.2112311 C0,31.010338 0.156250186,30.8540878 0.357143283,30.8540878 L14.2857313,30.8540878 L14.2857313,28.3540848 C14.2857313,28.2089954 14.3638564,28.0862274 14.4977851,28.0304237 C14.6317139,27.9746201 14.7768033,27.9969415 14.8884106,28.0862274 L19.17413,31.992482 C19.2410944,32.0594464 19.2857373,32.1487322 19.2857373,32.2491788 Z"
                      id=""
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
          <Link href="next" class="post-nav__next">
            <svg width="20px" height="9px" viewBox="0 0 20 9">
              <g id="Symbols" stroke="none" stroke-width="1">
                <g
                  id="slider-/-expertises"
                  transform="translate(-1378.000000, -494.000000)"
                >
                  <g id="Group" transform="translate(1378.000000, 494.000000)">
                    <path
                      d="M19.2857373,4.24917876 C19.2857373,4.34962531 19.2410944,4.45007186 19.17413,4.51703622 L14.8884106,8.46793379 C14.7768033,8.56838034 14.6317139,8.59070179 14.4977851,8.53489816 C14.3750171,8.47909452 14.2857313,8.35632651 14.2857313,8.21123706 L14.2857313,5.71123408 L0.357143283,5.71123408 C0.156250186,5.71123408 0,5.55498389 0,5.35409079 L0,3.21123109 C0,3.010338 0.156250186,2.85408781 0.357143283,2.85408781 L14.2857313,2.85408781 L14.2857313,0.354084832 C14.2857313,0.208995373 14.3638564,0.0862273696 14.4977851,0.0304237316 C14.6317139,-0.0253799063 14.7768033,-0.00305845116 14.8884106,0.0862273696 L19.17413,3.99248203 C19.2410944,4.05944639 19.2857373,4.14873221 19.2857373,4.24917876 Z"
                      id="-copy"
                      transform="translate(9.642869, 4.282396) scale(-1, 1) translate(-9.642869, -4.282396) "
                    />
                  </g>
                </g>
              </g>
            </svg>
          </Link>
        </div>
        <SingleArticlesDetails
          detailsTitle={this.state.title}
          detailsContent={this.state.content}
        />
        <OtherArticlesView />
        <Footer />
      </React.Fragment>
    );
  }
}

export default SingleBlog;
