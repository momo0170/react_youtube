import React from 'react';
import styles from '../css/navbar.module.css';

function Navbar({ onSubmit, inputRef }) {
  return (
    <form className={styles.navbar} onSubmit={onSubmit}>
      <div className={styles.logoAndName}>
        <i className={`fa-brands fa-youtube ${styles['navbar-logo']}`}></i>
        <span className={styles['navbar-name']}>YouTube</span>
      </div>
      <div className={styles.input}>
        <input
          ref={inputRef}
          placeholder="검색"
          type="text"
          className={styles['navbar-input']}
        />
        <button className={styles.button}>
          <i
            className={`fa-solid fa-magnifying-glass fa-lg ${styles['navbar-search']}`}
          ></i>
        </button>
      </div>
    </form>
  );
}

export default Navbar;
