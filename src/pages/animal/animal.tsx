import styles from './animal.module.scss';

export default () => (
  <div>
    <h3 className={styles.title}>image tag</h3>
    <img
      className={styles['image-tag']}
      src={require('@/assets/images/cat.jpg')}
      alt="cat"
    />
    <h3 className={styles.title}>background image</h3>
    <div className={styles.backgroundImage} />
  </div>
);
