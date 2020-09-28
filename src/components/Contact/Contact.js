import React from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import Form from "./Form/Form";
import Information from "./Information/Information"


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="content-blocks">
        <div className="content">
          <div className="block-content">
            <h3 className="block-title">ENVOYEZ-MOI UN MESSAGE</h3>
            <div className="row">
              <div className="col-md-6">
                <Form />
              </div>
              <div className="col-md-5 offset-md-1">
                <Information />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
