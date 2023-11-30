import './App.css';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Contacts from './components/pages/Contacts';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;