import React from 'react';
import noNickLogo from '../assets/noNickLogo 2.svg';
import styles from '../pages/Login.module.css';

export const Login = () => {

  const processForm = () => {
    // Lógica de processamento do formulário aqui
    console.log('Formulário processado!');
  };

  return (
    <section>
    <div>
      <div className={styles.logoContainer}>
        <a href="/"> {/* Substituído Link por <a> */}
          <img src={noNickLogo} className={styles.logo} alt="NoNick" />
        </a>
      </div>

      <div className={styles.welcomeContainer}>
        <h2>Seja bem-vindo!!</h2>
        <p>
          Você já tem uma conta?<br />
          Acesse para efetuar suas compras
        </p>
      </div>

      <div className={styles.buttonContainer}>
        <a href="" className={styles.aButton}> {/* Substituído Link por <a> */}
          <button>Entrar</button>
        </a>

        <a href="">Estou com problemas</a>
      </div>

      <div className={styles.rightContainer}>
        <div className={styles.loginTitle}>
          <h2>Faça seu registro</h2>
          <p>Preencha seus dados</p>
        </div>

        <form action="" id={styles.noteForm} method="post">
          <label htmlFor="username"></label>
          <input
            type="text"
            placeholder="Usuário: "
            id="username"
            name="username"
            minLength="5"
            maxLength="10"
            required
          /><br /><br />

          <label htmlFor="e-mail"></label>
          <input
            type="text"
            placeholder="E-mail:"
            id="e-mail"
            name="e-mail"
            maxLength="50"
            required
          /><br /><br />

          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Senha:"
            id="password"
            name="password"
            minLength="8"
            maxLength="15"
            required
          /><br /><br />
        </form>

        <div className={styles.buttonRContainer}>
          <button type="button" onClick={processForm}>
            Cadastrar
          </button>
        </div>
        <div id="result"></div>
      </div>
    </div>
    </section>
  );
};
