import React, { useState } from 'react';
import styles from '../components/Menu.module.css';

export const Menu = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleToggleSidebar = () => {
      setSidebarOpen(!sidebarOpen);
    };

  return (
    <div className={`${styles.menu_container} ${sidebarOpen ? styles.sidebar_open : ''}`}>
        
        <button className={`${styles.btn_x} ${sidebarOpen ? styles.show : ''}`} onClick={handleToggleSidebar} style={{ display: sidebarOpen ? 'block' : 'none' }}>
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 25 25" fill="none">
                                <path d="M2 23L12.5 12.5001M12.5 12.5001L23 2M12.5 12.5001L2 2M12.5 12.5001L23 23"
                                    stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
        </button>
        <button className={styles.btn_more} onClick={handleToggleSidebar} style={{ display: sidebarOpen ? 'none' : 'block' }}>
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
        
      {sidebarOpen && (
        <nav className={styles.menu_nav}>
          {/* Conteúdo do menu */}
          <div>
            <ul className={styles.menu_ul}>
              <li><a href=''>Register/Login</a></li>
              <li><a href="">Camisetas</a></li>
              <li><a href="">Tênis</a></li>
              <li><a href="">Acessórios</a></li>
              <li><a href="">Usuário</a></li>
              <li><a href="">Pesquisa</a></li>
            </ul>
          </div>
        </nav>
      )}
    </div>
  );
}


