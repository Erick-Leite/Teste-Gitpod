import styles from "./project.module.css";

import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";

import { parse, v4 as uuidv4 } from "uuid";

import Loading from "../../conponents-m/loading/Loading";
import ProjectForm from "../../projects/project-form/ProjectForm";
import Message from "../../conponents-m/message/Message";
import ServiceForm from "../../services/ServiceForm";
import ServiceCard from "../../services/ServiceCard";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    fetch(
      `https://5000-erickleite-testegitpod-wno80m3ji91.ws-us107.gitpod.io/projects/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setServices(data.services);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };

  const toggleServiceProject = () => {
    setShowServiceForm(!showServiceForm);
  };

  const editProject = (project) => {
    if (project.budget < project.cost) {
      setMessage("O orçamento do projeto não pode ser menor que o custo!");
      setType("error");
      return false;
    }

    fetch(
      `https://5000-erickleite-testegitpod-dgusp95n720.ws-us107.gitpod.io/projects/${project.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(project),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Projeto alterado!");
        setType("success");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setType("");
    }, 3000);
  }, [message, type]);

  const createService = (project) => {
    const lastService = project.services[project.services.length - 1];
    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;

    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado. verifique o valor do serviço");
      setType("error");
      project.services.pop();
      return false;
    }

    project.cost = newCost;
    console.log(project);

    fetch(
      `https://5000-erickleite-testegitpod-wno80m3ji91.ws-us107.gitpod.io/${project.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(project),
      }
    )
      .then((resp) => resp.json())
      .then(() => setShowServiceForm(false))
      .catch((error) => console.log(error));
  };

  const removeService = (id, cost) => {
    const updateServices = project.services.filter(
      (service) => service.id !== id
    );

    const updateProject = project;

    updateProject.services = updateServices;
    updateProject.cost = parseFloat(updateProject.cost) - parseFloat(cost);

    fetch(
      `https://5000-erickleite-testegitpod-wno80m3ji91.ws-us107.gitpod.io/projects/${updateProject.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateProject),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        setProject(updateProject);
        setServices(updateServices);
        setMessage(" Projeto removido com sucesso");
        setType("success");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className={styles.project_details}>
        {project.project_name ? (
          <>
            {message && <Message type={type} msg={message} />}
            <div className={styles.project_headers}>
              <h1>Projeto: {project.project_name}</h1>
              <button onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto" : "Fechar"}
              </button>
            </div>
            {!showProjectForm ? (
              <div className={styles.details_container}>
                <p>
                  <span>Categoria: </span>
                  {project.category.name}
                </p>
                <p>
                  <span>Total de Orçamento: </span>
                  R${project.budget}
                </p>
                <p>
                  <span>Total Utilizado: </span>
                  R${project.cost}
                </p>
              </div>
            ) : (
              <div className={styles.details_container}>
                <ProjectForm
                  handleSubmit={editProject}
                  submitBtnText="Concluir Edição"
                  projectData={project}
                />
              </div>
            )}
            <div className={styles.service_form_container}>
              <div className={styles.space_between}>
                <h2>Adicione um serviço:</h2>
                <button onClick={toggleServiceProject}>
                  {!showServiceForm ? "Criar serviço" : "Fechar"}
                </button>
              </div>
              {showServiceForm && (
                <ServiceForm
                  handleSubmit={createService}
                  submitBtnText="Adicionar Serviços"
                  projectData={project}
                />
              )}
            </div>
            <div className={styles.service_container}>
              <h2>Serviços:</h2>
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    name={service.name}
                    cost={service.cost}
                    description={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há serviços cadastrados.</p>}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Project;
