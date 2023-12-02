import "./App.css";
import Nav from "./header/components_h/Nav";
import MainRoutes from "./main/component/MainRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>
      <main>
        <MainRoutes customClass="min_height" />
      </main>
      <footer>
        <p>Rodapé</p>
      </footer>
    </Router>
  );
}

export default App;