import HeaderNavbar from "./header/components_h/Header";
import MainRoutes from "./main/conponents-m/Main";
import Footer from "./footer/components-f/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <HeaderNavbar />
      <MainRoutes />
      <Footer />
    </Router>
  );
}

export default App;
