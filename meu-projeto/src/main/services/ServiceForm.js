import styles from "../projects/project-form/project-form.module.css";

import { useState } from "react";

import Input from "../form/input/Input";
import SubmitButton from "../form/submit-button/SubmitButton";

function ServiceForm({ handleSubmit, submitBtnText, projectData }) {
  const [service, setService] = useState({});

  const submit = (e) => {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        text="Nome do serviço"
        type="text"
        name="name"
        placeholder="Insira o nome do serviço"
        handleOnchange={handleChange}
      />
      <Input
        text="Custo do serviço"
        type="number"
        name="cost"
        placeholder="Insira o valor total"
        handleOnchange={handleChange}
      />
      <Input
        text="Descrição do serviço"
        type="text"
        name="description"
        placeholder="Descreva o serviço"
        handleOnchange={handleChange}
      />
      <SubmitButton btnText={submitBtnText} />
    </form>
  );
}

export default ServiceForm;
