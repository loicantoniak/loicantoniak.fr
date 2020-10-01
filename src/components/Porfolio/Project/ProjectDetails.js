import React from "react";
import PropTypes from "prop-types";
import Footer from "../../Footer/Footer";
import "./Project.css";

export default function ProjectDetails(props) {
  const { name, category, client, description, image, date, url, link, technologies } = props;

  return (
    <div className="content-blocks">
      <div className="content">
        <div className="block-content">
          <div className="project-head">
            <h3 className="block-title">{name}</h3>
            <div className="tags">
              <span>Catégorie :</span> {category}
            </div>
            <div className="tags">
              <span>Client :</span> {client}
            </div>
            <div className="tags">
              <span>Réalisation :</span> {date}
            </div>
          </div>
          <div className="project-description">
            <p>{description}</p>
          </div>
          <div className="project-technology">
          <span>Technologies utilisées :</span> 
            {technologies.map((technology) => (
              <li>{technology}</li>
            ))}
          </div>
          <div className="link">
            <a href={link} target="blank">
              {link}
            </a>
          </div>
          <div className="project-media row">
            <div className="col-md-12">
              <a href={url} title={name} target="blank">
                <img alt="project illustration" src={image} />
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

ProjectDetails.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  client: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  url: PropTypes.string,
  link: PropTypes.string,
  technologies: PropTypes.array,
};
