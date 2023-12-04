import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";
import Container from "../../general-layout/General_layout_container";
import styles from "../footer-layout/footer-layout.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaWhatsapp />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>
      <p className={styles.copyright}>
        <span>Cost</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
