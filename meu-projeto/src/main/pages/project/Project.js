import styles from "./project.module.css";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import Loading from "../../conponents-m/loading/Loading";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);

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

  return (
    <>
      <div className={styles.project_details}>
        {project.project_name ? (
          <>
            <div className={styles.project_headers}>
              <h1>
                <span>Projeto: </span>
                {project.project_name}
              </h1>
              <button onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
            </div>
            <div>
              <p><span>Categoria: </span>{project.category.name}</p>
              <p><span>Total de Orçamento: </span>{project.budget}</p>
              <p><span>Total Utilizado: </span>{project.cost}</p>
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Project;
