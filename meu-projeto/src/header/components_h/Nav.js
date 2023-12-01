import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/new_project">Novo Projeto</Link>
        </li>
        <li>
          <Link to="/company">Empresa</Link>
        </li>
        <li>
          <Link to="/contacts">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;