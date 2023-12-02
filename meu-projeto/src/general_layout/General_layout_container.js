import styles from "../general_layout/general_layout.module.css";

function General_layout_container({ customClass, children }) {
  return (
    <div className={`${styles.container} ${styles[customClass]}`}>
      {children}
    </div>
  );
}

export default General_layout_container;