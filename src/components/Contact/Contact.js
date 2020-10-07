import React from "react";
import Form from "./Form/Form";
import Information from "./Information/Information";
import Map from "./Map/Map";

export default function Contact() {
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
        <Map />
      </div>
    </div>
  );
}
