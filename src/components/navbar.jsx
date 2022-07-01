import styles from '../css/navbar.module.css';

function Navbar() {
  return (
    <form className={styles.navbar}>
      <i className={`fa-brands fa-youtube ${styles['navbar-logo']}`}></i>
      <span className={styles['navbar-name']}>YouTube</span>
      <input type="text" className={styles['navbar-input']} />
      <button className={styles.button}>
        <i
          className={`fa-solid fa-magnifying-glass ${styles['navbar-search']}`}
        ></i>
      </button>
    </form>
  );
}

export default Navbar;
