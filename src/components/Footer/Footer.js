import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="row text-center">
        <div className="col-md-12 btn-email">
          <Link to="/contact">
            <div className="btn lowercase">loic.antoniak@gmail.com</div>
          </Link>
        </div>
      </div>
    </>
  );
}
