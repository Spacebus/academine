import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Backoffice from "./components/Backoffice.js";
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, E2BIG } from "constants";

ReactDOM.render(
    <BrowserRouter basename={"/lattes-mining"}>
        <Switch>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/sobre" component={About}/>
            <Route path="/backoffice" component={Backoffice}/>
            <Route path="*" component={Home}/>
        </Switch>
    </BrowserRouter>
, document.getElementById("root"));