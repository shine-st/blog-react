import React from 'react';
import ReactDOM from 'react-dom';

import Navigation from '../Navigation';
import Footer from '../Footer';
import BackendHeader from './BackendHeader';

const BackendMain = (props) => {
    console.log(props);

    return (
        <div>
            <BackendHeader />
            {props.children}
        </div>
    );
}

BackendMain.propTypes = {
    children: React.PropTypes.object,
};

export default BackendMain;

