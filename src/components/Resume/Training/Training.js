import React from "react";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

export default function Training() {
  return (
    <div className="block-content">
      <h3 className="block-title">FORMATIONS</h3>
      <div className="icon">
        <AccountBalanceIcon fontSize="large" />
      </div>
      <div className="timeline education">
        <div className="row">
          <div className="col-md-12">
            <div className="exp-holder">
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    DUT Informatique<span> | IUT de Reims</span>
                  </h4>
                  <h5>
                    Sept. 2019-<span className="current"></span>
                  </h5>
                </div>
                <p>
                  Bac + 2 en informatique, spécialisation en développement web
                  et applications.
                </p>
                <p>Langages utilisés : HTML - CSS - Javascript - PHP</p>
                <p>
                  Administration de BDD - NodeJs - ReactJs - Redux - React
                  Native - Symfony - SQL - Droit informatique - Gestion de projet -
                  Utilisation de la méthode Agile - Versionning avec Git. 
                </p>
                <p>
                  Projet d'équipe : création d'un site de tutoriels zéro
                  déchet (Symfony, React, Api Platform, Easy Admin).
                </p>
              </div>

              <div className="exp">
                <div className="hgroup">
                  <h4>
                    Licence Professionnelle APP<span> | IUT de Reims</span>
                  </h4>
                  <h5>Sept. 2010-Sept. 2011</h5>
                </div>
                <p>
                  Obtention du diplôme de licence professionnelle Assistance
                  Pilotage de Projets
                </p>
              </div>

              <div className="exp">
                <div className="hgroup">
                  <h4>
                    DUT GEA<span> | IUT de Reims</span>
                  </h4>
                  <h5>Sept. 2007-Juin 2009</h5>
                </div>
                <p>
                  Obtention du diplôme de DUT en Gestion des Entreprises et
                  Administration - Option Ressources Humaines
                </p>
              </div>

              <div className="exp">
                <div className="hgroup">
                  <h4>
                    Baccalauréat Générale ES <span> | Lycée Pierre Bayen</span>
                  </h4>
                  <h5>Sept. 2005-Juin 2007</h5>
                </div>
                <p>
                  Obtention du diplôme du Baccalauréat Général spécialisé en
                  Economie et Social
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
