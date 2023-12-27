import { useNavigate } from "react-router-dom";

import styles from "./new-project.module.css";

import ProjectForm from "../../projects/project-form/ProjectForm";

function NewProjects() {
  const Navigate = useNavigate();

  const createPost = (project) => {
    (project.cost = 0),
      (project.services = []),
      fetch(
        "https://5000-erickleite-testegitpod-wno80m3ji91.ws-us107.gitpod.io/projects",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(project),
        }
      )
        .then((resp) => resp.json())
        .then(() =>
          Navigate("/projects", {
            state: { message: "Projeto criador com sucesso!" },
          })
        )
        .catch((error) => console.log(error));
  };

  return (
    <section className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>crie seu projeto para depois gerência seus serviços</p>
      <ProjectForm handleSubmit={createPost} submitBtnText="Criar projeto" />
    </section>
  );
}

export default NewProjects;
