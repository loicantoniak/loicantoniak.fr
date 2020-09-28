import React from "react";
import './Services.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import LaptopIcon from '@material-ui/icons/Laptop';
import SmartphoneIcon from '@material-ui/icons/Smartphone';

export default function Services() {
  return (
    <div className="block-content">
      <h3 className="block-title">Services</h3>
      <div className="row">
        <div className="col-md-4 col-sm-6 service">
          <div className="service-icon">
            <ArrowBackIosIcon fontSize="large"/>
          </div>
          <h4>Ecrire du code</h4>
          <p>
            En tant que développeur, je passe mon temps à taper du code pour que
            cela fonctionne !
          </p>
        </div>

        <div className="col-md-4 col-sm-6 service">
          <div className="service-icon">
            <LaptopIcon fontSize="large" />
          </div>
          <h4>Sites Web</h4>
          <p>
            Que ce soit pour des projets personnels ou professionnels, je crée
            des sites web.&nbsp;
          </p>
        </div>

        <div className="col-md-4 col-sm-6 service">
          <div className="service-icon">
            <SmartphoneIcon fontSize="large" />
          </div>
          <h4>Applications</h4>
          <p>J'aime pouvoir créer des applications design et fonctionnelles</p>
        </div>
      </div>
    </div>
  );
}
