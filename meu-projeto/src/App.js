import "./App.css";
import Home from "./main/pages/Home";
import NewProjects from "./main/pages/NewProject";
import Company from "./main/pages/Company";
import Contacts from "./main/pages/Contacts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/new_project" >Novo Projeto</Link></li>
          <li><Link to="/company" >Empresa</Link></li>
          <li><Link to="/contacts" >Contatos</Link></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new_project" element={<NewProjects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
      <footer>
        <p>Rodapé</p>
      </footer>
    </Router>
  );
}

export default App;