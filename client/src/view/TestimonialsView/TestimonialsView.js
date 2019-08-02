import React from "react";
import config from "../../config";
import ClientsOverview from "../../components/ClientsOverview/ClientsOverview";
import Revealer from "../../components/Revealer/Revealer";

class ClientsView extends React.Component {
  constructor() {
    super();
    this.state = {
      clientDetails: []
    };
  }

  componentDidMount() {
    let clientsPage =
      config.domain + "wp-json/wp/v2/pages/" + config.clientsPage;
    let clientPosts = config.domain + "wp-json/wp/v2/" + config.clientPosts;
    fetch(clientsPage)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered
        })
      );
    fetch(clientPosts)
      .then(response => response.json())
      .then(response =>
        this.setState({
          clientDetails: response
        })
      );
  }
  render() {
    return (
      <section className="section--app section__testimonials">
        <Revealer />
        <ClientsOverview
          title={this.state.title}
          content={this.state.content}
          clientsList={this.state.clientDetails}
        />
      </section>
    );
  }
}

export default ClientsView;
