import React from "react";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="block-content">
      <h3 className="block-title">EXPERIENCES</h3>
      <div className="icon">
        <FilterHdrIcon fontSize="large" />
      </div>
      <div className="timeline experience">
        <div className="row">
          <div className="col-md-12">
            <div className="exp-holder">
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Développeur web</span>
                  </h4>
                  <h5>Septembre 2020 - Maintenant</h5>
                </div>
                <p>
                  Divers projets personnels : refonte de mon site personnel avec
                  React, Redux, Firebase, Material UI, NodeJS.
                </p>
                <p>
                  Auto-formation sur Firebase, Material-UI, NodeJS, tests
                  unitaires avec Jest
                </p>
                <p>
                  Reproduction de divers sites : Tinder, Instagram, AirBnb sur
                  React.
                </p>
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Développeur web - stagiaire</span> @Equinoxes Reims
                  </h4>
                  <h5>Juin 2020-Aout 2020</h5>
                </div>
                <p>
                  Mise en place d'une interface interne à destination des
                  graphistes afin de mettre en évidence le potentiel des
                  composants UI KIT.&nbsp;
                </p>
                <p>
                  Création d'un site marchand sur Wordpress et UI KIT.&nbsp;
                </p>
                <p>
                  Technologies utilisées : HTML, CSS, Javascript - Less -
                  Wordpress et composants UI KIT.&nbsp;&nbsp;
                </p>
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Développeur web - stagiaire</span> @IUT de Reims
                  </h4>
                  <h5>Janv. 2020-Juin 2020</h5>
                </div>
                <p>
                  Création d'une application pouvant regrouper des tutoriels
                  zéro déchet et de mettre en relation les utilisateurs et les
                  acteurs locaux investies dans l'environnement.
                </p>
                <p>
                  Analyse du projet : création d'un cahier des charges, MCD et
                  UseCase.
                </p>
                <p>Conception de la base de données.</p>
                <p>Gestion du back-end : Symfony et EasyAdmin</p>
                <p>Mise en place d'une API.</p>
                <p>Élaboration du front-end grâce à React.</p>{" "}
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Assistant d'agence</span> @One Job Reims
                  </h4>
                  <h5>Nov. 2013-Mai 2019</h5>
                </div>
                <p>
                  Recrutement des intérimaires, création d’annonces d’emploi.
                  Gestion de la paie des salariés. (Heures, bulletins de paie,
                  DSN) Gestion administratif du personnel : dossiers, contrats
                  de travail. Facturation client, relance impayés Veille
                  informationnelle (législation RH).
                </p>
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Formateur en recherche d'emploi</span> @Greta de la
                    Marne
                  </h4>
                  <h5>Avril 2013-Oct. 2013</h5>
                </div>
                <p>
                  Cours sur les thématiques de recherche d’emploi : élaboration
                  de CV et
                  <br />
                  lettre de motivation, préparation aux entretiens, recherche de
                  stages,
                  <br />
                  identification du bassin de l’emploi.
                  <br />
                  Suivi des stagiaires – Référent entreprise
                  <br />
                  Création d’un job dating avec des professionnels reconnus
                </p>
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Assistant commercial</span> @Adequat - Reims
                  </h4>
                  <h5>Nov. 2012-Nov. 2012</h5>
                </div>
                <p>
                  Suivi des dossiers intérimaires
                  <br />
                  Recrutement
                  <br />
                  Élaboration des contrats de travail
                  <br />
                  Gestion des heures.
                </p>
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Chargé de recrutement</span> @Randstad - Reims
                  </h4>
                  <h5>Avril 2011-Juin 2012</h5>
                </div>
                <p>
                  Accueil physique et téléphonique
                  <br />
                  Recrutement des intérimaires, création d’annonces d’emploi.
                  <br />
                  Gestion des relevés d’heures
                  <br />
                  Gestion administratif du personnel : dossiers, contrats de
                  travail.
                </p>
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Evénementiel</span> @IUT - Reims
                  </h4>
                  <h5>Janv. 2013-Fév. 2013</h5>
                </div>
                <p>
                  Création de cahier des charges, gestion budgétaire
                  <br />
                  Communication externe, Sponsoring
                  <br />
                  Organisation d’une exposition et d’un concert.
                </p>
              </div>
              <div className="exp">
                <div className="hgroup">
                  <h4>
                    <span>Chargé de communication</span> @Association Arcade{" "}
                  </h4>
                  <h5>Sept. 2008-Juin 2009</h5>
                </div>
                <p>
                  Gestion de budget, création de partenariats
                  <br />
                  Organisation d'événements (450 personnes)
                  <br />
                  Print (création d’affiches et flyers)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
