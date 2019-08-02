import React from "react";
import ContentTextFixed from "../../components/ContentTextFixed/ContentTextFixed";
import config from "../../config";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Revealer from "../../components/Revealer/Revealer";
import "./contact.scss";
import { blendMode, resetTop } from "../../index";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      message: "",
      email: "",
      option: "",
      sent: false,
      buttonText: "Send Message"
    };
  }

  formSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      buttonText: "...sending"
    });

    let data = {
      name: this.state.name,
      email: this.state.email,
      option: this.state.option,
      message: this.state.message,
      emailType: "New Message"
    };

    axios
      .post("/api/form", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
        console.log("Message sent");
      })
      .catch(() => {
        console.log("Message not sent");
      });
  };

  // reset form
  resetForm = () => {
    this.setState({
      name: "",
      message: "",
      email: "",
      buttonText: "Message Sent"
    });
  };

  componentDidMount() {
    let Contact = config.domain + "wp-json/wp/v2/pages/" + config.ContactPage;
    fetch(Contact)
      .then(response => response.json())
      .then(response =>
        this.setState({
          title: response.title.rendered,
          content: response.content.rendered,
          imgDesktop:
            response.better_featured_image.media_details.sizes.desktopForm
              .source_url,
          imgIpad:
            response.better_featured_image.media_details.sizes.ipad.source_url
        })
      );
    blendMode();
    resetTop();
  }

  render() {
    let { title, content, imgDesktop, imgIpad } = this.state;

    return (
      <React.Fragment>
        <Revealer />

        <section
          data-anchor="form"
          className="section__contact "
        >
          <div className="block__left">
            <ContentTextFixed
              label="Work Together"
              title={title}
              content={content}
            />
          </div>
          <div className="block__right">
            <Form onSubmit={e => this.formSubmit(e)} className="form">
              <FormGroup>
                <Input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Your name"
                  onChange={e => this.setState({ name: e.target.value })}
                />
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <Input
                  type="select"
                  name="option"
                  id="option"
                  onChange={e => this.setState({ option: e.target.value })}
                >
                  <option value="" disabled selected>
                    How can we help you?
                  </option>
                  <option>Looking for a consultant</option>
                  <option>Apply for a job</option>
                  <option>More information</option>
                </Input>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Your message"
                  onChange={e => this.setState({ message: e.target.value })}
                />
              </FormGroup>

              <Button type="submit">{this.state.buttonText}</Button>
            </Form>
          </div>

          <picture className="bottom__picture">
            <source media="(min-width: 768px)" srcSet={imgDesktop} />
            <img className="cover__img" src={imgIpad} alt={title} />
          </picture>
        </section>

        <Footer />
      </React.Fragment>
    );
  }
}

export default Contact;
