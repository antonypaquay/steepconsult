import React from "react";
import { Link } from "react-router-dom";

class JobCard extends React.Component {
  componentDidMount(){
    var jobsList = document.getElementById("jobsAvailable").childNodes.length,
        jobCounterLabel = document.getElementsByClassName('counter--span'),
        scrollerProgress = document.getElementsByClassName('spinner__job');
        jobCounterLabel[0].innerHTML = jobsList;
    if(jobsList < 10) {
      scrollerProgress[0].style.display = "none";
    }
  }
  render() {
    return (
      <React.Fragment>
        {/* Transformer Link en Objet pour faire passer le state dans la props location/:id */}

        <li className="job__list-item">
          <Link
          className=" job__link "
            to={{
              // On donne un chemin
              pathname: `/jobs/${this.props.details.slug}`,
              // On passe les données souhaitées
              title: `${this.props.details.title.rendered}`,
              content: `${this.props.details.content.rendered}`,
              imgDesktop: `${
                this.props.details.better_featured_image.media_details.sizes
                  .articleBlog.source_url
              }`
            }}
          >
            <h3 className="job__title">{this.props.details.title.rendered}</h3>
            <span className="job__location">Brussels</span>
          </Link>
        </li>
      </React.Fragment>
    );
  }
}

export default JobCard;
