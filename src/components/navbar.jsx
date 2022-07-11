import React from 'react';
import styles from '../css/navbar.module.css';

function Navbar({ onSubmit, inputRef }) {
  console.log('This is navbar');
  return (
    <form className={styles.navbar} onSubmit={onSubmit}>
      <i className={`fa-brands fa-youtube ${styles['navbar-logo']}`}></i>
      <span className={styles['navbar-name']}>YouTube</span>
      <input ref={inputRef} type="text" className={styles['navbar-input']} />
      <button className={styles.button}>
        <i
          className={`fa-solid fa-magnifying-glass ${styles['navbar-search']}`}
        ></i>
      </button>
    </form>
  );
}

export default React.memo(Navbar);
