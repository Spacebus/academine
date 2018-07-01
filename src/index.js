import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Backoffice from "./components/Backoffice.js";


ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/sobre" component={About}/>
            <Route path="/backoffice" component={Backoffice}/>
        </Switch>
    </BrowserRouter>
, document.getElementById("root"));