/**
 * Created by shinest on 29/12/2016.
 */
import React from 'react';
import { Link } from 'react-router';

var HtmlToReactParser = require('html-to-react').Parser;


const Home = ({metaList, page, action}) => {
    let hr = React.createElement('hr', {class: 'small'}, '');
    let parser = new HtmlToReactParser();
    let nextPage = (page % 2) + 1;
    let link = "/home/" + nextPage;


    // {parser.parse(result.get('brief_content'))}
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">

                    {metaList.map((result, index) => {
                        let postLink = "/post/" + result.get('path');
                        return (
                            <div className="post-preview" key={index}>
                                <Link to={postLink}>
                                    <h2 className="post-title">
                                        {result.get('title')}
                                    </h2>
                                    <h3 className="post-subtitle">
                                        {result.get('subtitle')}
                                    </h3>
                                </Link>
                                <p className="post-meta">Posted by <a href="#">shinest</a> on {result.get('create_at')}
                                </p>
                                <hr />
                            </div>
                        );
                    })}

                    <ul className="pager">
                        <li className="next">
                            <Link onClick={action(nextPage)} to={link}>Other Posts</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};



export default Home;