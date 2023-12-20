import { Routes, Route } from "react-router-dom";
import styles from "./main.module.css";
import Home from "../../pages/home/Home";
import Projects from "../../pages/projects/Projects";
import Project from "../../pages/project/Project";
import NewProject from "../../pages/new_project/NewProject";
import Company from "../../pages/company/Company";
import Contacts from "../../pages/contacts/Contacts";

function Main() {
  return (
    <main className={styles.main_container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
}

export default Main;
