import styles from "./project-form.module.css";

import { useState, useEffect } from "react";

import Input from "../../form/input/Input";
import Select from "../../form/select/Select";
import SubmitButton from "../../form/submit-button/SubmitButton";

function ProjectForm({ handleSubmit, submitBtnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch(
      "https://5000-erickleite-testegitpod-wno80m3ji91.ws-us107.gitpod.io/categories",
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

  const SubmitForm = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  const handleInputChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSelectionChange = (e) => {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  };

  return (
    <form onSubmit={SubmitForm} className={styles.form}>
      <Input
        name="project_name"
        text="Nome do projeto"
        type="text"
        placeholder="insira o nome do projeto"
        handleOnchange={handleInputChange}
        value={project.project_name}
      />
      <Input
        name="budget"
        text="Orçamento do projeto"
        type="number"
        placeholder="insira o orçamento total"
        handleOnchange={handleInputChange}
        value={project.budget}
      />
      <Select
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnchange={handleSelectionChange}
        value={project.category?.id}
      />
      <SubmitButton btnText={submitBtnText} />
    </form>
  );
}

export default ProjectForm;
