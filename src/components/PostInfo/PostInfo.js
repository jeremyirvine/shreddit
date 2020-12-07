import React from 'react';
import './PostInfo.css'

import moment from 'moment'

// op = Original Poster / You posted this
const PostInfo = ({title, username, timestamp, op, click, user}) => {

    let usernameClasses = ["username"]
    op && usernameClasses.push("op")

    moment.suppressDeprecationWarnings = true
    const getTimeFromNow = time => moment(time).fromNow()

    return ( 
        <span className="PostInfo">
            <b>{title}</b> • Posted by <span className={usernameClasses.join(" ")} onClick={() => click(user)}>u/{username}</span> • {getTimeFromNow(timestamp)}
        </span> );
}
 
export default PostInfo;