import React from 'react';
import styles from '../components/LoginPopup.module.css';

const LoginPopup = ({ onClose }) => {
  const processForm = () => {
    console.log('Formulário processado!');
    onClose();
  };

  //onClick={processForm}

  return (
    <div className={styles.popupContainer}>
      <section className={styles.sectionFooter}>
       <div>test</div>
      </section>
    </div>
  );
};

export default LoginPopup;
