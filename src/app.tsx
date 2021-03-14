import { FC } from 'react';
import style from './app.module.scss';
import vars from './vars.module.scss';

const App: FC = () => (
  <>
    <h1 className={style.title}>webpack5 with react</h1>
    <p style={{ color: vars.danger }}>sass variable example</p>
  </>
);

export default App;
