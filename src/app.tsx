import { FC } from 'react';
import styles from './app.module.scss';
import vars from './vars.module.scss';

const App: FC = () => (
  <>
    <h1 className={styles.title}>webpack5 with react</h1>
    <p style={{ color: vars.danger }}>sass variable example</p>
    <img
      className={styles['image-tag']}
      src={require('@/assets/images/cat.jpg')}
      alt="cat"
    />
    <div className={styles['background-image']} />
  </>
);

export default App;
