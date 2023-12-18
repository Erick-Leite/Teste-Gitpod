import styles from "./loading.module.css";

import loadingSVG from "../../../img/loading.svg";

function Loading() {
  return (
    <div className={styles.loading_container}>
      <img src={loadingSVG} alt="Loading" className={styles.loading} />
    </div>
  );
}

export default Loading;
