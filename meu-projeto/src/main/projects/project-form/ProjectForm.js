import styles from "./project-form.module.css";

import { useState, useEffect } from "react";

import Input from "../../form/input/Input";
import Select from "../../form/select/Select";
import SubmitButton from "../../form/submit-button/SubmitButton";

function ProjectForm({ submitBtnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(
      "https://5000-erickleite-testegitpod-vhypm7co665.ws-us106.gitpod.io/categories",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        name="project_name"
        textl="Nome do projeto"
        type="text"
        placeholder="insira o nome do projeto"
      />
      <Input
        name="budget"
        text="Orçamento do projeto"
        type="number"
        placeholder="insira o orçamento total"
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
      />
      <SubmitButton btnText={submitBtnText} />
    </form>
  );
}

export default ProjectForm;
