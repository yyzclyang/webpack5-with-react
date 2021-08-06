import { FC, Suspense, lazy } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';
import history from '@/utils/history';
import '@/styles/global.scss';
import styles from './app.module.scss';

const App: FC = () => (
  <Router history={history}>
    <NavLink className={styles.link} to="/">
      home
    </NavLink>
    <NavLink className={styles.link} to="/animal">
      animal
    </NavLink>
    <Suspense fallback={<span>loading</span>}>
      <Switch>
        <Route
          path="/animal"
          component={lazy(() => import('./pages/animal'))}
        />
        <Route path="/" exact component={lazy(() => import('./pages/home'))} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
