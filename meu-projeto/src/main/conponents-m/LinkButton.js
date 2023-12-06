import { Link } from "react-router-dom";
import styles from "../page-layout/home-layout.module.css";

function LinkButton({ to, text }) {
  return (
    <Link to={to} className={styles.link_button}>
      {text}
    </Link>
  );
}

export default LinkButton;
