import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import database from "../Firebase/firebase";
import ProjectList from "./Project/ProjectList";
import Filter from "./Filter/Filter";
import Footer from '../Footer/Footer'

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [filterProjects, setFilterProjects] = useState([]);
  const [categories, setCategories] = useState([]);

  // Ajax to recover all projects on Firebase database
  useEffect(() => {
    const unsubscribe = database
      .collection("project")
      .onSnapshot((snapshot) =>
        setProjects(snapshot.docs.map((doc) => doc.data()))
      );

    // the cleanup...
    return () => unsubscribe();
  }, []);
  
  // ComponentDidMount recover all projects. 
  useEffect(() => setFilterProjects(projects), [projects]);

  // Ajax to recover all categories on Firebase database
  useEffect(() => {
    database
      .collection("category")
      .orderBy("id", "asc")
      .onSnapshot((snapshot) =>
        setCategories(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  // function triggered to filter projects by categories
  // recover category name (setting) 
  // update projects's state : projects as the same name as setting
  function handleClick(name) {
    let filter = [];
    if (name === "Tout") {
      filter = projects;
    } else {
      filter = projects.filter((project) => project.category === name);
    }

    setFilterProjects(filter);
  }

  return (
    <div className="content-blocks">
      <div className="content">
        <div className="block-content">
          <h3 className="block-title">PORTFOLIO</h3>
          <div className="row">
            <div className="col-md-12">
              <div className="filters">
                <span>Filtres :</span>
                <ul>
                  {categories.map((category) => (
                    <Filter
                      key={category.id}
                      name={category.name}
                      onClick={() => handleClick(category.name)}
                    />
                  ))}
                </ul>
              </div>

              <div className="portfolio-container row">
                {filterProjects.map((project) => (
                  <ProjectList
                    key={project.name}
                    name={project.name}
                    category={project.category}
                    image={project.image}
                    date={project.date}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
