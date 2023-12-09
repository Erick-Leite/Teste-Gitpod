import styles from "./submit-button.module.css";

function SubmitButton({ btnText }) {
  return (
    <div>
      <button className={styles.submit_button}>{btnText}</button>
    </div>
  );
}

export default SubmitButton;
