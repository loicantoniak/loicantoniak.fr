import React from "react";
import profil from "../../../assets/images/profil.jpg";
import "./Profil.css"

export default function Profil() {
  return (
    <div className="block-content">
      <h3 className="block-title">PROFIL</h3>
      <div className="center">
        <img alt="avatar" src={profil} />
      </div>
      <p>
        Expérimenté en gestion de projet dans le domaine des Ressources Humaines
        pendant près de 8 ans, j'ai décidé de me reconvertir dans le
        développement web. <br/>Bac + 2 en informatique validé 2020, spécialisé en développement
        web et mobile.<br/>J'ai une forte affinitée avec le
        développement côté client.
      </p>
      <div className="info-list">
        <div className="col-sm-6">
          <span>Nom :</span>Antoniak Loïc
        </div>
        <div className="col-sm-6">
          <span>Date de naissance : </span>12 avril 1989
        </div>
        <div className="col-sm-6">
          <span>Adresse :</span>Reims, France
        </div>
        <div className="col-sm-6">
          <span>Nationalité :</span>Française
        </div>
        <div className="col-sm-6">
          <span>Téléphone :</span>(+33) 6 82 51 89 30
        </div>
        <div className="col-sm-6">
          <span>Mail :</span>loic.antoniak@gmail.com
        </div>
      </div>
    </div>
  );
}
