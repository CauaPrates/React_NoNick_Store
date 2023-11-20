import React from 'react';
import styles from '../components/RegisterModal.module.css';
import noNickLogo from '../assets/noNickLogo2.png';

const RegisterModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const processForm = () => {
        console.log('Formulário de registro processado!');
        onClose();
    };

    console.log('Modal de registro está sendo renderizado. isOpen:', isOpen);


    return (
        <div className={styles.modalOverlay} onClick={(e) => e.stopPropagation()}>
            <main>

                <div className={styles.leftContainer}>
                    <div className={styles.logoContainer}>
                        <a href=""><img src={noNickLogo} className={styles.logo} alt="NoNick" /></a>
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
                        <input type="text" placeholder="Usuário:" id="username" name="username" minLength="5" maxLength="63" required /><br /><br />

                        <label htmlFor="e-mail"></label>
                        <input type="text" placeholder="E-mail:" id="e-mail" name="e-mail" maxLength="127" required /><br /><br />

                        <label htmlFor="password"></label>
                        <input type="password" placeholder="Senha:" id="password" name="password" minLength="8" maxLength="15" required /><br /><br />
                    </form>

                    <div className={styles.buttonRContainer}>
                    <button type="button" onClick={processForm}>Cadastrar</button>
                </div>
                </div>

            </main>
        </div>
    );
};

export default RegisterModal;
