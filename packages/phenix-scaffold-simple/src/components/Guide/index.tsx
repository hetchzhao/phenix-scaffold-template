import styles from './index.module.scss';

const Guide = () => {
  return (
    <div class={styles.container}>
      <h2 class={styles.title}>Welcome to phenixjs!</h2>
      <p class={styles.description}>This is a awesome project, enjoy it!</p>
      <div class={styles.action}>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 20,
          }}
        >
          使用文档
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Guide;
