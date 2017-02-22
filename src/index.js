import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, hashHistory, IndexRoute, IndexRedirect} from "react-router";
import store from "./store";
import Main from "./components/Main";
import HomeContainer from "./containers/HomeContainer";
import PostContainer from "./containers/PostContainer";
import AboutContainer from "./containers/AboutContainer";


// <IndexRoute component={HomeContainer}/>

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}>
                <IndexRedirect to="/home/1" />
                <Route path="/home/:page" component={HomeContainer}/>
                <Route path="/post/:path" component={PostContainer}/>
                <Route path="/about/:type" component={AboutContainer}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);

