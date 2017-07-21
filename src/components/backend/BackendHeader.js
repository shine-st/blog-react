import React from "react";


const BackendHeader = () => {
    let hr = React.createElement('hr', '', '');
    let backgroundImage = {
        backgroundImage: "url('/images/home_bg.jpg')"
    }

    return (
        <div className="intro-header" style={backgroundImage}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <div className="site-heading">
                            <h1>shinest blog backend</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BackendHeader;