import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostPage from '../pages/PostPage/PostPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const Router = () => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/">
        <FeedPage />
      </Route>
      <Route exact path="/post">
        <PostPage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default Router;
