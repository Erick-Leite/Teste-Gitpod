import { useLocation } from "react-router-dom";

import styles from "./projects.module.css";

import Message from "../../conponents-m/message/Message";

function Projects() {
  const Location = useLocation();

  let message = Location.state?.message;

  return (
    <div className={styles.project_container}>
      <h1>Projetos criados</h1>
      {message && <Message type="success" msg={message} />}
    </div>
  );
}

export default Projects;
