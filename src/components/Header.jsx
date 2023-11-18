import React, { useState } from 'react';
import styles from '../components/Header.module.css';
import NoNickLogo from '../assets/noNickLogo 2.svg';
import { Menu } from './Menu';
import Modal from 'react-modal';
import ModalWindow from './ModalWindow';

// Importe o estilo do Modal
import '../components/Modal.module.css';


// Configuração do react-modal
Modal.setAppElement('#root'); // Substitua '#root' pelo id do elemento root da sua aplicação.

export function Header({ onLoginClick }) {
    const [isModalVisible, setModalVisibility] = useState(false);

    const handleModalToggle = () => {
        setModalVisibility(!isModalVisible);
    };

    const handleCloseModal = () => {
        setModalVisibility(false);
    };

    return (
        <div className={styles.headerContainer}>

            {isModalVisible && <div className={styles.blurBackground} onClick={handleCloseModal}></div>}

            <header>

                <div className={styles.menu_bar_container}>
                <Menu className={styles.menu_bar}></Menu>
                </div>

                <nav className={styles.nav_top}>
                    <button className={styles.btn_login} onClick={handleModalToggle}>
                        Register/Login
                    </button>

                 

                    
                    <button className={styles.btn_more} id="openMenu">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 25 20" fill="none">
                            <path d="M2 2H23H2Z" fill="currentColor" />
                            <path d="M2 2H23" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M2 10H23H2Z" fill="currentColor" />
                            <path d="M2 10H23" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M2 18H23H2Z" fill="currentColor" />
                            <path d="M2 18H23" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </nav>

                <a href="/">
                    <img src={NoNickLogo} className={styles.logo} alt="LOGO" />
                </a>



                <nav className={styles.nav_top}>

                    <button className={styles.btn_user}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 29" fill="none">
                            <path
                                d="M2 27V25.4375C2 19.3969 6.89689 14.5 12.9375 14.5C18.9781 14.5 23.875 19.3969 23.875 25.4375V27"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M12.9375 14.5C16.3892 14.5 19.1875 11.7017 19.1875 8.25C19.1875 4.79822 16.3892 2 12.9375 2C9.48575 2 6.68753 4.79822 6.68753 8.25C6.68753 11.7017 9.48575 14.5 12.9375 14.5Z"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button className={styles.btn_cart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 29 29" fill="none">
                            <path
                                d="M23.875 27C24.9105 27 25.75 26.1605 25.75 25.125C25.75 24.0895 24.9105 23.25 23.875 23.25C22.8395 23.25 22 24.0895 22 25.125C22 26.1605 22.8395 27 23.875 27Z"
                                fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M11.375 27C12.4105 27 13.25 26.1605 13.25 25.125C13.25 24.0895 12.4105 23.25 11.375 23.25C10.3395 23.25 9.5 24.0895 9.5 25.125C9.5 26.1605 10.3395 27 11.375 27Z"
                                fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path d="M5.75 4.5H27L24.5 18.25H8.25L5.75 4.5ZM5.75 4.5C5.54166 3.66666 4.5 2 2 2"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                                d="M24.5 18.25H8.25H6.03846C3.80808 18.25 2.625 19.2265 2.625 20.75C2.625 22.2735 3.80808 23.25 6.03846 23.25H23.875"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button className={styles.btn_search}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 29 29" fill="none">
                            <path d="M20.75 20.75L27 27" stroke="currentColor" stroke-width="3" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M2 12.7143C2 18.6316 6.79695 23.4286 12.7143 23.4286C15.678 23.4286 18.3609 22.2252 20.3005 20.2804C22.2336 18.3423 23.4286 15.6679 23.4286 12.7143C23.4286 6.79695 18.6316 2 12.7143 2C6.79695 2 2 6.79695 2 12.7143Z"
                                stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>

                    <button className={styles.btn_heart}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 29 26" fill="none">
                            <path
                                d="M27 9.32778C27 11.2609 26.2578 13.1176 24.9323 14.4911C21.8811 17.6538 18.9217 20.9516 15.7566 23.9996C15.0311 24.6881 13.8802 24.663 13.186 23.9434L4.0672 14.4911C1.31093 11.634 1.31093 7.02154 4.0672 4.16446C6.85055 1.27931 11.3849 1.27931 14.1682 4.16446L14.4997 4.50803L14.831 4.16466C16.1655 2.78063 17.983 2 19.8816 2C21.7802 2 23.5976 2.78055 24.9323 4.16446C26.2579 5.53806 27 7.39471 27 9.32778Z"
                                stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
                        </svg>
                    </button>
                </nav>

                
            </header>
            <nav className={styles.nav_bot}>
                <a href="#">
                    Camisetas
                </a>
                <a href="#">
                    Tênis
                </a>
                <a href="#">
                    Acessórios
                </a>

            </nav>
            {isModalVisible && (
                    <ModalWindow
                        isOpen={isModalVisible}
                        onRequestClose={handleCloseModal}
                        contentLabel="Login Modal"
                    />
                )}
        </div>
    )
}
