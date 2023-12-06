import styles from "../projects-layout/project-form.module.css";

function ProjectForm() {
  return (
    <section className={styles.project_form_container}>
      <form>
        <input type="text" placeholder="insira o nome do projeto" />
        <input type="number" placeholder="insira o orçamento total" />
        <select name="category_id">
          <option disabled selected>selecione a categoria</option>
        </select>
        <input type="submit" value="Criar Projeto" />
      </form>
    </section>
  );
}

export default ProjectForm;
