import styles from "./new-project.module.css";

import ProjectForm from "../../projects/project-form/ProjectForm";

function NewProjects() {
  return (
    <section className={styles.new_project_container}>
      <h1>Criar Projeto</h1>
      <p>crie seu projeto para depois gerência seus serviços</p>
      <ProjectForm submitBtnText="Criar projeto" />
    </section>
  );
}

export default NewProjects;
