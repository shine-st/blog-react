import React from 'react';
import ReactDOM from 'react-dom';


const AboutHeader = ({title}) => {
    let hr = React.createElement('hr', '', '');
    let backgroundImage = {
        backgroundImage: "url('../res/img/about-bg.jpg')"
    }

    return (
        <div className="intro-header" style={backgroundImage}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="page-heading">
                            <h1>{title}</h1>
                            <hr className="small"/>
                            <span className="subheading">Just me!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutHeader;