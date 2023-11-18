import React from 'react';
import styles from '../components/Modal.module.css';
import noNickLogo from '../assets/noNickLogo2.png';

const ModalWindow = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const processForm = () => {
        console.log('Formulário processado!');
        onClose();
    };

    console.log('Modal está sendo renderizado. isOpen:', isOpen);

    return (
        <div className={styles.modalOverlay}  onClick={(e) => e.stopPropagation()}>
                <main>
                    <div className={styles.leftContainer}>
                        <div className={styles.logoContainer}>
                            <a href="/"><img src={noNickLogo} className={styles.logo} alt="NoNick" /></a>
                        </div>

                        <div className={styles.welcomeContainer}>
                            <h2>
                                Seja bem-vindo!!
                            </h2>
                            <br />
                            <p>
                                ainda não tem uma conta? <br />
                                acesse para efetuar suas compras
                            </p>

                            <div className={styles.buttonContainer}>
                                <a href="/" className={styles.aButton}>
                                    <button>
                                        Registar
                                    </button>
                                </a>
                            </div>

                            <div>
                                <a href="#">
                                    Esqueci minha senha
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightContainer}>
                        <div className={styles.loginTitle}>
                            <h2>Acesse sua conta</h2>
                            <p>Preencha seus dados</p>
                        </div>

                        <form id="noteForm">
                            <label htmlFor="username"></label>
                            <input type="text" placeholder="Usuário:" id="username" name="username" minLength="5" maxLength="10" required /><br /><br />

                            <label htmlFor="password"></label>
                            <input type="password" placeholder="Senha:" id="password" name="password" minLength="8" maxLength="15" required /><br /><br />

                            <div className={styles.buttonRContainer}>
                                <button type="submit" onClick={processForm}>Login</button>
                            </div>
                        </form>

                        <div id="result"></div>
                    </div>
                </main>
            </div>
        
    );
};

export default ModalWindow;
