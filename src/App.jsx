import './global.css';
import { Header } from './components/Header';
import styles from './App.module.css'
import { Main } from './components/Routes';
import { Footer } from './components/Footer';


export function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
