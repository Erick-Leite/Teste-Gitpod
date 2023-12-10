import styles from "./select.module.css";

function Select({ name, text, options, handleOnchange, value }) {
  return (
    <div className={styles.select_container}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name}>
        <option>selecione uma opção</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
