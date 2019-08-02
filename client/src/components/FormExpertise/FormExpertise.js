import React from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import Axios from "axios";

class FormExpertise extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      message: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state;

    const form = await Axios.post("/api/form", {
      name,
      email,
      message
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Input
              type="name"
              name="name"
              id="name"
              placeholder="Your name"
              onChange={this.handleChange}
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              onChange={this.handleChange}
            />
            <Input
              type="textarea"
              name="message"
              id="message"
              placeholder="Your message"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button>Send</Button>
        </Form>
      </div>
    );
  }
}

export default FormExpertise;
