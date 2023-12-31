import './global.css';
import { Header } from './components/Header';
import styles from './App.module.css';
import { Main } from './components/Routes';
import { Footer } from './components/Footer';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';


const pagesWithoutHeaderFooter = ['/login', '/register','/menu']; 


export function App() {
  const location = useLocation();
  const [shouldShowHeaderFooter, setShouldShowHeaderFooter] = useState(true);
  const [isModalVisible, setModalVisibility] = useState(false);

  useEffect(() => {
    const isPageWithoutHeaderFooter = pagesWithoutHeaderFooter.includes(location.pathname);
    setShouldShowHeaderFooter(!isPageWithoutHeaderFooter);
  }, [location]);
  const handleModalToggle = () => {
    setModalVisibility(!isModalVisible);
  };

  return (
    <div className={styles.App}>
      <Switch>
        <Route path={pagesWithoutHeaderFooter}>
          <Main />
        </Route>
        <Route path={!pagesWithoutHeaderFooter}>
          {shouldShowHeaderFooter && <Header onRegisterClick={handleModalToggle} />}
          {isModalVisible && <ModalWindow onClose={handleModalToggle} />} 
          <Main />
          {shouldShowHeaderFooter && <Footer onRegisterClick={handleModalToggle} />}
        </Route>
      </Switch>
    </div>
  );
}