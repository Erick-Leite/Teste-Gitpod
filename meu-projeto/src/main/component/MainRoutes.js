import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NewProjects from "../pages/NewProject";
import Company from "../pages/Company";
import Contacts from "../pages/Contacts";
import Container from "../../general_layout/General_layout_container";

function MainRoutes() {
  return (
    <Container customClass="min_height">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new_project" element={<NewProjects />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Container>
  );
}

export default MainRoutes;