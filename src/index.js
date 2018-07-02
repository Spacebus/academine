import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Backoffice from "./components/Backoffice.js";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/sobre" component={About}/>
            <Route path="/backoffice" component={Backoffice}/>
            <Route path="*" component={Home}/>
        </Switch>
    </HashRouter>
, document.getElementById("root"));