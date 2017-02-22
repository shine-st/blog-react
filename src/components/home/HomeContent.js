/**
 * Created by shinest on 29/12/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var HtmlToReactParser = require('html-to-react').Parser;

const Home = ({metaList, page}) => {
    let hr = React.createElement('hr', {class: 'small'}, '');
    let parser = new HtmlToReactParser();
    let link = "#/home/" + ((page % 2) + 1);

    // {parser.parse(result.get('brief_content'))}
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                    {metaList.map((result, index) => {
                        let postLink = "#/post/" + result.get('path');
                        return (
                            <div className="post-preview" key={index}>
                                <a href={postLink}>
                                    <h2 className="post-title">
                                        {result.get('title')}
                                    </h2>
                                    <h3 className="post-subtitle">
                                        {result.get('subtitle')}
                                    </h3>
                                </a>
                                <p className="post-meta">Posted by <a href="#">shinest</a> on {result.get('create_at')}
                                </p>
                                <hr />
                            </div>
                        );
                    })}

                    <div className="post-preview">
                        <a href="post.html">
                            <h2 className="post-title">
                                Failure is not an option
                            </h2>
                            <h3 className="post-subtitle">
                                Many say exploration is part of our destiny, but it’s actually our duty to future
                                generations.
                            </h3>
                        </a>
                        <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on July 8, 2014</p>
                    </div>
                    <hr />

                    <ul className="pager">
                        <li className="next">
                            <a href={link}>Older Posts &rarr;</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Home;