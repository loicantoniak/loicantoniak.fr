import React from "react";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import "./Information.css"

export default function Information() {
  return (
    <>
      <div className="contact-content">
        <div className="contact-icon">
          <RoomOutlinedIcon fontSize="large" />
        </div>
        <div className="contact-details">
          <h5>Adresse / Ville</h5>
          <p>Reims, France </p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-icon">
          <PhoneOutlinedIcon fontSize="large" />
        </div>
        <div className="contact-details">
          <h5>Numéro de téléphone</h5>
          <p>(+33) 6 82 51 89 30 </p>
        </div>
      </div>
      <div className="contact-content">
        <div className="contact-icon">
          <MailOutlineOutlinedIcon fontSize="large" />
        </div>
        <div className="contact-details">
          <h5>Mail</h5>
          <p>loic.antoniak@gmail.com</p>
        </div>
      </div>
    </>
  );
}
