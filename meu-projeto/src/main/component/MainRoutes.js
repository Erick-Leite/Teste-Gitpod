import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewProjects from "../pages/NewProject";
import Company from "../pages/Company";
import Contacts from "../pages/Contacts";
import styles from "../main_layout/main_routes.module.css";

function MainRoutes({customClass}) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_project" element={<NewProjects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;