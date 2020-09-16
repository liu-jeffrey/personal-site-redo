import React from "react";
import "./projects.scss";
import projectData from "./projects-data.json";
import ProjectCard from "../../components/project-card/project-card.jsx";

function Projects() {
  return (
    <div id="projects-view" class="view">
      <h1 id="projects-title" class="view-title">
        Projects
      </h1>
      <div id="projects-cards">
        <ProjectCard data={projectData["moodCensus"]} />
        <ProjectCard data={projectData["listenUp"]} />
      </div>
    </div>
  );
}

export default Projects;
