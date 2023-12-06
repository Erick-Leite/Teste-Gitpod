import { Routes, Route } from "react-router-dom";
import styles from "./main.module.css";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import NewProject from "../../pages/NewProject";
import Company from "../../pages/Company";
import Contacts from "../../pages/Contacts";

function Main() {
  return (
    <main className={styles.main_container}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/new-project" element={<NewProject />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </main>
  );
}

export default Main;
