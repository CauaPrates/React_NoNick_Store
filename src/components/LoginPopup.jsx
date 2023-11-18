import React from 'react';
import styles from '../components/LoginPopup.module.css';
import noNickLogo from '../assets/noNickLogo_Login.svg'; // Certifique-se de fornecer o caminho correto para o seu logo

const LoginPopup = ({ onClose }) => {
  const processForm = () => {
    console.log('Formulário processado!');
    onClose();
  };

  return (
    <div className={styles.popupContainer}>
      <section className={styles.sectionFooter}>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer}>
            <a href="/">
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
            <a href="/" className={styles.aButton}>
              <button>Entrar</button>
            </a>

            <a href="/">Estou com problemas</a>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.loginTitle}>
            <h2>Faça seu registro</h2>
            <p>Preencha seus dados</p>
          </div>

          <form action="" className={styles.noteForm} method="post">
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
      </section>
    </div>
  );
};

export default LoginPopup;
