import vars from '@/styles/vars.module.scss';
import styles from './home.module.scss';

export default () => (
  <div>
    <h1 className={styles.title}>scss module example</h1>
    <p style={{ color: vars.danger }}>scss variable example</p>
  </div>
);
