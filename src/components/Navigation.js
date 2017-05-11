import React from 'react';
import ReactDOM from 'react-dom';
import { Link, IndexLink, Router, Route, hashHistory, IndexRoute, IndexRedirect } from "react-router";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: 'Type some *markdown* here!',
        }
    }

    handleChange() {
        this.setState({value: this.refs.textarea.value});
    }

    render() {
        let homeLink = this.props.backend ? (<Link to="/backend">Backend</Link>) : (
            <IndexLink to="/">Home</IndexLink>);


        return (
            <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container-fluid">

                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            Menu <i className="fa fa-bars"></i>
                        </button>
                        <a className="navbar-brand" href="/"></a>
                    </div>


                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                {homeLink}
                            </li>
                            <li>
                                <Link to="/about/me">About</Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </nav>
        );
    }
}

export default Navigation;
