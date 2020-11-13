import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../Components/NavBar";
import LandingForm from "../Pages/form-n";
import LandingCard from "../Pages/Card";

export default function Routes() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact component={LandingForm} />
                <Route path="/card" exact component={LandingCard} />
            </Switch>
        </Router>
    );
}