import MainPage from '../pages/MainPage';
import CardPage from '../pages/CardPage';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <MainPage />
        </Route>
        <Route exact path={'/CardPage'}>
          <CardPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
