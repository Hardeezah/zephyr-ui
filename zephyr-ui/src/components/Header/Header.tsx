import React from 'react';
import styles from './Header.module.css'; // Import CSS module

interface HeaderProps {
  title: string;           // Page name
  logo: string;            // Logo URL
  onNotifyClick: () => void; // Notification button click handler
  onUsernameClick: () => void; // Username button click handler
  backgroundColor?: string; // Optional background color
}

const Header: React.FC<HeaderProps> = ({
  title,
  logo,
  onNotifyClick,
  onUsernameClick,
  backgroundColor,
}) => {
  return (
    <header className={styles.header} style={{ backgroundColor }}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={onNotifyClick}>
          🛎️ Notifications
        </button>
        <button className={styles.button} onClick={onUsernameClick}>
          👤 Username
        </button>
      </div>
    </header>
  );
};

export default Header;
