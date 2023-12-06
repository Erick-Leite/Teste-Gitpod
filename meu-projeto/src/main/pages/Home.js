import styles from "../page-layout/home-layout.module.css";

import savings from "../../img/savings.svg";

import LinkButton from "../conponents-m/LinkButton";

function Home() {
  return (
    <section className={styles.home_container}>
      <h1>
        bem-vindo ao <span>cost</span>
      </h1>
      <p>comece a gerência os seus projetos agora mesmo!</p>
      <LinkButton to="/new-project" text="criar projeto" />
      <img src={savings} alt="Poupança" />
    </section>
  );
}

export default Home;
