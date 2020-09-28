import React, { useEffect, useState } from "react";
import ProjectDetails from "./ProjectDetails";
import database from "../../Firebase/firebase";
import { useParams } from "react-router-dom";

export default function RouteProjectDetails() {
  let { name } = useParams();
  const [projets, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = database
      .collection("project")
      .where("name", "==", name)
      .onSnapshot((snapshot) =>
        setProjects(snapshot.docs.map((doc) => doc.data()))
      );
    // the cleanup...
    return () => unsubscribe();
  }, [name]);

  return (
    <div>
      {projets.map((project) => (
        <ProjectDetails
          key={project.name}
          name={project.name}
          category={project.category}
          client={project.client}
          url={project.url}
          description={project.description}
          date={project.date}
          image={project.image}
        />
      ))}
    </div>
  );
}
