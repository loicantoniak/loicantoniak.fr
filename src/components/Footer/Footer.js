import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
  return (
    <Link to="/contact">
      <div className="row text-center">
        <div className="col-md-12 btn-email">
          <div className="btn lowercase">
            loic.antoniak@gmail.com
          </div>
        </div>
      </div>
    </Link>
  );
}
