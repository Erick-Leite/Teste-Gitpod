import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <Link to="/" >Home</Link>
            <Link to="/projects" >Projetos</Link>
            <Link to="/contacts" >Contatos</Link>
          </ul>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
          <footer>
            <p>Rodapé</p>
          </footer>
        </div>
      </Router>
    </div>
  );
}

export default App;