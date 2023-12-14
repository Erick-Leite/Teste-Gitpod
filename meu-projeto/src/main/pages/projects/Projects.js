import { useLocation } from "react-router-dom";

import Link from "../../conponents-m/link-button/LinkButton";

import styles from "./projects.module.css";

import Message from "../../conponents-m/message/Message";

function Projects() {
  const Location = useLocation();

  let message = Location.state?.message;

  return (
    <div className={styles.projects}>
      <div className={styles.projects_header}>
        <p>Meus projetos</p>
        <Link to="/new-project" text="Criar Projeto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <div className={styles.projects_container}>
        <p>Projetos...</p>
      </div>
    </div>
  );
}

export default Projects;
