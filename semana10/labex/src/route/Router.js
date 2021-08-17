import AdminHomePage from "../pages/AdminHomePage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import ApplicationFormPage from "../pages/ApplicationFormPage";
import CreateTripPage from "../pages/CreateTripPage";
import ListTripsPage from "../pages/ListTripsPage";
import LoginPage from "../pages/LoginPage";
import TripDetailsPage from "../pages/TripDetailsPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/AdminHomePage"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/ApplicationFormPage"}>
          <ApplicationFormPage />
        </Route>

        <Route exact path={"/CreateTripPage"}>
          <CreateTripPage />
        </Route>

        <Route exact path={"/ListTripsPage"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/LoginPage"}>
          <LoginPage />
        </Route>

        <Route exact path={"/TripDetailsPage"}>
          <TripDetailsPage />
        </Route>

        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;