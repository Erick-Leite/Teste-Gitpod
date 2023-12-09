import styles from "./project-form.module.css";
import Input from "../../form/input/Input";
import Select from "../../form/select/Select";
import SubmitButton from "../../form/submit-button/SubmitButton";

function ProjectForm({ submitBtnText }) {
  return (
    <form className={styles.form}>
      <Input
        name="project_name"
        text="Nome do projeto"
        type="text"
        placeholder="insira o nome do projeto"
      />
      <Input
        name="budget"
        text="Orçamento do projeto"
        type="number"
        placeholder="insira o orçamento total"
      />
      <Select name="category_id" text="Selecione a categoria" />
      <SubmitButton btnText={submitBtnText} />
    </form>
  );
}

export default ProjectForm;
