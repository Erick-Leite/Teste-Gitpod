import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./projects.module.css";

import LinkButton from "../../conponents-m/link-button/LinkButton";
import Message from "../../conponents-m/message/Message";
import Loading from "../../conponents-m/loading/Loading";
import ProjectCard from "../../projects/project-card/ProjectCard";

function Projects() {
  const [removeLoading, setRemoveLoading] = useState(false);
  const Location = useLocation();
  const Navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [projectMessage, setProjectMessage] = useState("");

  let message = Location.state?.message;

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        Navigate(".", {
          state: {},
        });
      }, 3000);
    }
  }, [message, Navigate]);

  const removeProject = (id) => {
    fetch(
      `https://5000-erickleite-testegitpod-dgusp95n720.ws-us107.gitpod.io/projects/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectMessage("Projeto removido com sucesso!");
      })
      .catch((error) => console.log(error));
  };

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
      {projectMessage && <Message type="success" msg={projectMessage} />}
      <div className={styles.projects_container}>
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.project_name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
            />
          ))}
      </div>
      {!removeLoading && <Loading />}
    </div>
  );
}

export default Projects;
