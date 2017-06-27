import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
// import Header from './Header';
import Header from '../containers/HomeContainer';
import Footer from './Footer';

const Main = (props) => {

    let isBackend = props.location.pathname.indexOf("backend") != -1;

    return (
        <div>
            <Navigation
                backend={isBackend}
            />
            {props.children}
            <Footer />
        </div>
    );
}

Main.propTypes = {
    children: React.PropTypes.object,
};

export default Main;

