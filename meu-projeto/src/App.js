import HeaderNavbar from "./header/components_h/header/Header";
import MainRoutes from "./main/conponents-m/main/Main";
import Footer from "./footer/components-f/footer/Footer";
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
