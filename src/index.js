import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { hashHistory, IndexRedirect, Route, Router } from "react-router";
import store from "./store";
import Main from "./components/Main";
import HomeContainer from "./containers/HomeContainer";
import PostContainer from "./containers/PostContainer";
import AboutContainer from "./containers/AboutContainer";
import BackendMain from "./components/backend/BackendMain";
import LoginContainer from "./containers/LoginContainer";

// <IndexRoute component={HomeContainer}/>

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRedirect to="/home/1"/>
                <Route path="/home/:page" component={HomeContainer}/>
                <Route path="/post/:path" component={PostContainer}/>
                <Route path="/about/:type" component={AboutContainer}/>
                <Route path="/backend" component={BackendMain}>
                    <Route path="/backend/login" component={LoginContainer}/>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

