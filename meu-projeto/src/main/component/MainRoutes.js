import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewProjects from "../pages/NewProject";
import Company from "../pages/Company";
import Contacts from "../pages/Contacts";
import styles from "./MainRoutes.module.css"

function MainRoutes() {
  return (
    <Routes className={styles.container}>
      <Route path="/" element={<Home />} />
      <Route path="/new_project" element={<NewProjects />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default MainRoutes;