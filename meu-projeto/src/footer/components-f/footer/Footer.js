import { FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

import styles from "../footer/footer.module.css";

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
