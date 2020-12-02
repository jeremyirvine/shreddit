import React from 'react';

import './PostPreview.css'

import moment from 'moment'

const PostPreview = ({title, user, timestamp, text}) => {
    
    const getTimeFromNow = time => moment(time).fromNow()

    return ( 
        <div className="PostPreview" >
            <span><b>{title}</b> • Posted by u/{user.name} • {getTimeFromNow(timestamp)}</span>
            <hr />
            <p>{text}</p>
            <hr />
        </div>
     );
}
 
export default PostPreview;