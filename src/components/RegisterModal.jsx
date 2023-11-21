import React, { useState } from 'react';
import styles from '../components/RegisterModal.module.css';
import noNickLogo from '../assets/noNickLogo2.png';

const BASE_URL = 'http://localhost:3000';

const register = async (newUser) => {
  const url = `${BASE_URL}/auth/register`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    if (!response.ok) {
      throw new Error('Erro ao registrar usuário');
    }

    return await response.json();
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

const RegisterModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const processForm = async () => {
    const newUser = {
      nome: username,
      email: email,
      senha: password,
    };

    try {
      // Chamar a função de registro com o novo usuário
      const registeredUser = await register(newUser);
      console.log('Registro bem-sucedido:', registeredUser);

      // Se o registro for bem-sucedido, você pode fazer algo com o usuário registrado
      document.getElementById('result').textContent = 'Registro bem-sucedido.';

      // Fechar o modal
      onClose();
    } catch (error) {
      console.error('Erro no registro:', error);

      // Tratar o erro e exibir uma mensagem
      setError('Erro ao se registrar. Verifique os dados fornecidos.');
    }
  };

  if (!isOpen) return null;

  console.log('Modal de registro está sendo renderizado. isOpen:', isOpen);

  return (
    <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>
      <main>
        <div className={styles.leftContainer}>
          <div className={styles.logoContainer} onClick={onClose}>
            <a href="#"><img src={noNickLogo} className={styles.logo} alt="NoNick" /></a>
          </div>

          <div className={styles.welcomeContainer}>
            <h2>Seja bem-vindo!!</h2>
            <p>
              Registre-se para uma<br />
              melhor experiência
            </p>
          </div>

          <div className={styles.buttonContainer}>
            <a href="/" className={styles.aButton}>
              <button>
                Entrar
              </button>
            </a>
          </div>

          <div>
            <br />
            <a href="#">
              Estou com problemas
            </a>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div onClick={onClose}>
            <a href='javascript:void(0)'> {/* ou href='#' */}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 25 25" fill="none">
                <path d="M2 23L12.5 12.5001M12.5 12.5001L23 2M12.5 12.5001L2 2M12.5 12.5001L23 23"
                  stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className={styles.loginTitle}>
            <h2>Faça seu registro</h2>
            <p>Preencha seus dados</p>
          </div>

          <form className={styles.noteForm} id="noteForm">
            <label htmlFor="username"></label>
            <input
              type="text"
              placeholder="Usuário:"
              id="username"
              name="username"
              minLength="5"
              maxLength="63"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            /><br /><br />

            <label htmlFor="e-mail"></label>
            <input
              type="text"
              placeholder="E-mail:"
              id="e-mail"
              name="e-mail"
              maxLength="127"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            /><br /><br />

            <div className={styles.buttonRContainer}>
              <button type="button" onClick={processForm}>Cadastrar</button>
            </div>
          </form>

          <div id="result">{error}</div>
        </div>
      </main>
    </div>
  );
};

export default RegisterModal;
