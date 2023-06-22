import React from 'react';
import {Layout} from "./Layout.jsx";
import {Login} from "./pages/Login.jsx";
import {Signup} from "./pages/Signup.jsx";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/signup" component={Signup}/>
                </Switch>
            </Layout>
        </Router>
    );
};
export default App;