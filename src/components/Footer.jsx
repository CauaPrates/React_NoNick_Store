import React from 'react';
import styles from './Footer.module.css';
import NoNickLogoFooter from '../assets/noNickLogo2.png'

export function Footer() {
    return (
        <section className={styles.footer_conteiner}>
            <footer>
                <div id={styles.footer_content}>

                    <div className={styles.footer_list}>
                        <img src={NoNickLogoFooter} className={styles.footer_logo} alt="NoNick" />
                    </div>

                    <ul className={styles.footer_list}>
                        <li>
                            <h3>Suporte</h3>
                        </li>
                        <li>
                            <a href="/Html/Feedback_Pesquisa.html" target="_blank" className={styles.footer_link}>
                                Responda nosso <br />questionario de feedback
                            </a>
                        </li>
                        <li>
                            <a href="#" className={styles.footer_link}>E-mail</a>
                        </li>
                    </ul>

                    <ul className={styles.footer_list}>
                        <li>
                            <h3>Sobre a OAR x NoNick</h3>
                        </li>
                        <li>
                            <a href="#" className={styles.footer_link}>Informações da empresa</a>
                        </li>
                        <li>
                            <a href="#" className={styles.footer_link}>Contato</a>
                        </li>
                    </ul>

                    <ul className={styles.footer_list}>
                        <li>
                            <h3>Redes sociais</h3>
                        </li>
                        <div className={styles.footer_row}>
                            <li>
                                <a href="https://www.instagram.com/oldandrude/" target="_blank" className={styles.footer_link}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29"
                                        fill="none">
                                        <path
                                            d="M14.4539 20.0554C17.537 20.0554 20.0364 17.5681 20.0364 14.4999C20.0364 11.4316 17.537 8.94434 14.4539 8.94434C11.3707 8.94434 8.87134 11.4316 8.87134 14.4999C8.87134 17.5681 11.3707 20.0554 14.4539 20.0554Z"
                                            stroke="#E9EBF8" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M1.89307 20.0556V8.94444C1.89307 5.10914 5.0173 2 8.87122 2H20.0363C23.8902 2 27.0144 5.10914 27.0144 8.94444V20.0556C27.0144 23.8908 23.8902 27 20.0363 27H8.87122C5.0173 27 1.89307 23.8908 1.89307 20.0556Z"
                                            stroke="#E9EBF8" stroke-width="3" />
                                        <path d="M22.1296 6.87481L22.1435 6.85938" stroke="#E9EBF8" stroke-width="3"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.footer_link}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="29" viewBox="0 0 35 29"
                                        fill="none">
                                        <path
                                            d="M32.8002 2.01401C32.8002 2.01401 29.9751 3.67492 28.4042 4.14568C27.5609 3.18087 26.4404 2.49704 25.1939 2.18667C23.9475 1.87631 22.6354 1.95437 21.4351 2.41032C20.2347 2.86628 19.2039 3.67811 18.4823 4.73601C17.7606 5.79393 17.3829 7.04687 17.4001 8.32541V9.71866C14.9397 9.78214 12.5018 9.23912 10.3035 8.13794C8.10507 7.03676 6.21447 5.41162 4.80002 3.40726C4.80002 3.40726 -0.800017 15.9465 11.8001 21.5195C8.91678 23.4671 5.48204 24.4438 2 24.306C14.6001 31.2722 30.0002 24.306 30.0002 8.28362C29.9989 7.89553 29.9614 7.5084 29.8882 7.12722C31.317 5.72491 32.8002 2.01401 32.8002 2.01401Z"
                                            stroke="#E9EBF8" stroke-width="3" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/CauaPrates/React_NoNick_Store" target="_blank" className={styles.footer_link}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29"
                                    fill="none">
                                    <path
                                        d="M19.4765 27V23.4173C19.5233 22.8221 19.4429 22.2237 19.2406 21.6619C19.0382 21.1002 18.7187 20.5878 18.3031 20.1592C22.2228 19.7223 26.3423 18.2367 26.3423 11.4209C26.3419 9.67799 25.6716 8.00195 24.4698 6.73964C25.0388 5.21482 24.9986 3.52938 24.3575 2.03345C24.3575 2.03345 22.8844 1.59653 19.4765 3.88097C16.6153 3.10553 13.5994 3.10553 10.7382 3.88097C7.33028 1.59653 5.85725 2.03345 5.85725 2.03345C5.21607 3.52938 5.17584 5.21482 5.7449 6.73964C4.53417 8.01131 3.86307 9.70251 3.87241 11.4583C3.87241 18.2243 7.99188 19.7098 11.9116 20.1966C11.5009 20.621 11.1842 21.1271 10.982 21.682C10.7798 22.2369 10.6968 22.8282 10.7382 23.4173V27"
                                        stroke="#E9EBF8" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M10.7383 24.5033C6.99331 25.7182 3.87249 24.5033 2 20.7583"
                                        stroke="#E9EBF8" stroke-width="3" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/SamuelSoaresSilva/SpringBoot_API-REST/tree/Portable_Api_Without_ImageUpload" target="_blank" className={styles.footer_link}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M26.9997 2L25.6108 3.31579" stroke="#E9EBF8" stroke-width="3.06403" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 2L3.38889 3.31579" stroke="#E9EBF8" stroke-width="3.06403" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M26.9997 20.4208L25.6108 19.105" stroke="#E9EBF8" stroke-width="3.06403" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2 20.4208L3.38889 19.105" stroke="#E9EBF8" stroke-width="3.06403" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10.3335 23.0522H18.6668" stroke="#E9EBF8" stroke-width="3.06403" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.7224 27H17.278" stroke="#E9EBF8" stroke-width="3.06403" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.4997 3.31543C8.944 3.31543 6.09978 5.8816 6.16643 9.89438C6.19891 11.8508 6.86066 13.1839 8.24976 14.4996C9.63886 15.8154 10.3333 16.4733 10.3331 19.1049H18.6664C18.6666 16.4735 19.3611 15.8154 20.7496 14.4998C22.1383 13.184 22.8007 11.8508 22.833 9.89438C22.8997 5.8816 20.0555 3.31543 14.4997 3.31543Z" stroke="#E9EBF8" stroke-width="3.06403" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
                <hr />
                <div id={styles.footer_copyright}>
                    &#169;
                    2023 OAR x NoNick
                </div>
            </footer>
        </section>
    );
}
