import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ul>
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/projects" >Projects</Link></li>
            <li><Link to="/contacts" >Contacts</Link></li>
          </ul>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Contacts" element={<Contacts />} />
          </Routes>
        </main>
        <footer>
          <p>Rodapé</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;