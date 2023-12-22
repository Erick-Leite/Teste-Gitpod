import styles from "./project.module.css";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import Loading from "../../conponents-m/loading/Loading";
import ProjectForm from "../../projects/project-form/ProjectForm";
import Message from "../../conponents-m/message/Message";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    fetch(
      `https://5000-erickleite-testegitpod-dgusp95n720.ws-us107.gitpod.io/projects/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setProject(data))
      .catch((error) => console.log(error));
  }, [id]);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function editProject(project) {
    if (project.budget < project.cost) {
      setMessage("O orçamento do projeto não pode ser menor que o custo!");
      setType("error");
      return false;
    }

    fetch(
      `https://5000-erickleite-testegitpod-dgusp95n720.ws-us107.gitpod.io/projects/${project.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(project),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto alterado!");
        setType("success");
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  return (
    <>
      <div className={styles.project_details}>
        {project.project_name ? (
          <>
            {message && <Message type={type} msg={message} />}
            <div className={styles.project_headers}>
              <h1>Projeto: {project.project_name}</h1>
              <button onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
            </div>
            {!showProjectForm ? (
              <div className={styles.details_container}>
                <p>
                  <span>Categoria: </span>
                  {project.category.name}
                </p>
                <p>
                  <span>Total de Orçamento: </span>
                  R${project.budget}
                </p>
                <p>
                  <span>Total Utilizado: </span>
                  R${project.cost}
                </p>
              </div>
            ) : (
              <div className={styles.details_container}>
                <ProjectForm
                  handleSubmit={editProject}
                  submitBtnText="Concluir Edição"
                  projectData={project}
                />
              </div>
            )}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Project;
