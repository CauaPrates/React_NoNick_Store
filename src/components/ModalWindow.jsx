import React, { useState } from 'react';
import styles from '../components/Modal.module.css';
import noNickLogo from '../assets/noNickLogo2.png';
import RegisterModal from './RegisterModal';

const BASE_URL = 'http://localhost:3000';

const login = async (email, senha) => {
    const url = `${BASE_URL}/auth/login`;

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

const processForm = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const token = await login(email, password);
        console.log('Token de login:', token);

        document.getElementById('result').textContent = 'Login bem-sucedido.';
    } catch (error) {
        console.error('Erro no login:', error);
        document.getElementById('result').textContent = 'Erro ao fazer login. Verifique suas credenciais.';
    }
};
const ModalWindow = ({ isOpen, onClose }) => {
    const [isRegisterModalVisible, setRegisterModalVisibility] = useState(false);

    const openRegisterModal = () => {
        // Fechar o modal atual

        // Abrir o modal de registro
        setRegisterModalVisibility(true);
    };

    const closeRegisterModal = () => {
        setRegisterModalVisibility(false);
    };

    console.log('Modal está sendo renderizado. isOpen:', isOpen);

    return (
        <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>

            <main>
                <div className={styles.leftContainer}>
                    <div className={styles.logoContainer} onClick={onClose}>
                        <a href="javascript:void(0)"><img src={noNickLogo} className={styles.logo} alt="NoNick" /></a>
                    </div>

                    <div className={styles.welcomeContainer}>
                        <h2>Seja bem-vindo!!</h2>

                        <p>
                            ainda não tem uma conta? <br />
                            acesse para efetuar suas compras
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
                    <div onClick={onClose}>
                        <a href='javascript:void(0)'> {/* ou href='#' */}
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
                        <label for="email"></label>
                        <input type="email" placeholder="Email:" id="email" name="email" minlength="5" maxlength="127" required /><br /><br />

                        <label for="password"></label>
                        <input type="password" placeholder="Senha:" id="password" name="password" minlength="8" maxlength="15" required /><br /><br />
                        <div className={styles.buttonRContainer}>
                            <button type="submit" onClick={processForm}>Login</button>
                        </div>
                    </form>

                    <div id="result"></div>
                </div>
            </main>

            {isRegisterModalVisible && (
                <RegisterModal
                    isOpen={isRegisterModalVisible}
                    onClose={closeRegisterModal}
                    contentLabel="Registro Modal"
                />
            )}
        </div>

    );
};

export default ModalWindow;
