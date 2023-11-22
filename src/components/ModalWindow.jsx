import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../components/Modal.module.css';
import noNickLogo from '../assets/noNickLogo2.png';
import RegisterModal from './RegisterModal';

const BASE_URL = 'http://localhost:3000';

const login = async (baseUrl, email, senha) => {
  const url = `${baseUrl}/auth/login`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login');
    }

    const data = await response.json();
    return data.accessToken;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

const ModalWindow = ({ isOpen, onClose }) => {
    const [isRegisterModalVisible, setRegisterModalVisibility] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();
  
    const openRegisterModal = () => {
      setRegisterModalVisibility(true);
    };
  
    const closeRegisterModal = () => {
      setRegisterModalVisibility(false);
    };
  
    const closeAllModals = () => {
        setRegisterModalVisibility(false);
        onClose(); // Feche apenas a modal de login
      };
  
    const processForm = async () => {
      try {
        const token = await login(BASE_URL, email, password);
        console.log('Token de login:', token);
        onClose(); // Feche a modal de login
      } catch (error) {
        console.error('Erro no login:', error);
        setEmail('');
        setPassword('');
        setError('Erro ao fazer login. Verifique suas credenciais.');
      }
    };
  
    return (
      <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>
      <main>
        <div className={styles.leftContainer}>
          <div className={styles.btn_close} onClick={onClose}>
            <a href='javascript:void(0)'>
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 25 25" fill="none">
                <path d="M2 23L12.5 12.5001M12.5 12.5001L23 2M12.5 12.5001L2 2M12.5 12.5001L23 23"
                  stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <div className={styles.logoContainer} onClick={onClose}>
            <a href="#"><img src={noNickLogo} className={styles.logo} alt="NoNick" /></a>
          </div>

          <div className={styles.welcomeContainer}>
            <h2>Seja bem-vindo!!</h2>

            <p>
              ainda não tem uma conta? <br />
              crie para efetuar suas compras
            </p>

            <div className={styles.buttonContainer}>
              <a className={styles.aButton} onClick={openRegisterModal}>
                <button>
                  Registrar
                </button>
              </a>
            </div>

            <div>
              <br />
              <a href="#">
                Esqueci minha senha
              </a>
            </div>
          </div>
        </div>

        <div className={styles.rightContainer}>

          <div className={styles.btn_close} onClick={onClose}>
            <a href='#'> {/* ou href='#' */}
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 25 25" fill="none">
                <path d="M2 23L12.5 12.5001M12.5 12.5001L23 2M12.5 12.5001L2 2M12.5 12.5001L23 23"
                  stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <div className={styles.loginTitle}>
            <h2>Acesse sua conta</h2>
            <p>Preencha seus dados</p>
          </div>

          <form className={styles.noteForm} id="noteForm">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="Email:"
              id="email"
              name="email"
              minLength="5"
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
              <button type="button" onClick={processForm}>Login</button>
            </div>
          </form>

          <br />

          <div id="result">{error}</div>
        </div>
      </main>

      {isRegisterModalVisible && (
        <RegisterModal
          isOpen={isRegisterModalVisible}
          onClose={() => { closeRegisterModal(); onClose(); }} // Feche ambas as modais
          onRegisterSuccess={() => {
            setRegisterModalVisibility(false);
            onClose(); // Feche ambas as modais
            history.push('/'); // Redirecione para a página inicial
          }}
          contentLabel="Registro Modal"
        />
      )}
    </div>
)}

export default ModalWindow;
