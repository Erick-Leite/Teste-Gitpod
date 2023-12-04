import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Company from "../pages/Company";
import Contacts from "../pages/Contacts";
import Container from "../../general-layout/General_layout_container";

function Main() {
  return (
    <main>
      <Container customClass="min_height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Container>
    </main>
  );
}

export default Main;
