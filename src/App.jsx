import './global.css';
import { Header } from './components/Header';
import styles from './App.module.css'
import { Main } from './components/Main';


export function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <Main/>
    </div>
  );
}
