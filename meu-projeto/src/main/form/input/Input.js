import styles from "./input.module.css";

function Input({ name, text, type, placeholder, handleOnchange, value }) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name}>{text}:</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onchange={handleOnchange}
        value={value}
      />
    </div>
  );
}

export default Input;
