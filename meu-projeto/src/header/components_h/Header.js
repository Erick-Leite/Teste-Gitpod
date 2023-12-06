import { Link } from "react-router-dom";

import styles from "../header-layout/header-layout.module.css";

import logo from "../../img/costs_logo.png";

function Header() {
  return (
    <header>
      <nav className={styles.nav_bar}>
        <div>
          <Link to="/">
            <img src={logo} alt="logotipo" />
          </Link>
        </div>
        <ul className={styles.list_links}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projeto</Link>
          </li>
          <li>
            <Link to="/company">Empresa</Link>
          </li>
          <li>
            <Link to="/contacts">Contatos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
