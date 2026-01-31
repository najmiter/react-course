import styles from './button.module.css';

export default function Button() {
  return <button className={`${styles.button} ${styles.container}`}>Click Here</button>;
}
