/**
 * Created by shinest on 27/02/2017.
 */
import React from 'react';

const Disqus = () => {
    let hr = React.createElement('hr', {class: 'small'}, '');

    return (
        <div className="disqus_area">
            <br />
            <hr />
            <div id="disqus_thread"></div>
        </div>
    )
};

export default Disqus;