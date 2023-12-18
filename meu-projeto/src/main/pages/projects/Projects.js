import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./projects.module.css";

import LinkButton from "../../conponents-m/link-button/LinkButton";
import Message from "../../conponents-m/message/Message";
import Loading from "../../conponents-m/loading/Loading";
import ProjectCard from "../../projects/project-card/ProjectCard";

function Projects() {
  const Location = useLocation();
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  let message = Location.state?.message;

  useEffect(() => {
    fetch(
      "https://5000-erickleite-testegitpod-dgusp95n720.ws-us107.gitpod.io/projects",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
        setRemoveLoading(true);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className={styles.projects}>
      <div className={styles.projects_header}>
        <p>Meus projetos</p>
        <LinkButton to="/new-project" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <div className={styles.projects_container}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.project_name}
              budget={project.budget}
              category={project.category.name}
            />
          ))}
      </div>
      {!removeLoading && <Loading />}
    </div>
  );
}

export default Projects;
