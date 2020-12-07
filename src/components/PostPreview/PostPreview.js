import React from 'react';
import PostInfo from '../PostInfo/PostInfo';

import './PostPreview.css'


const PostPreview = ({title, user, timestamp, text, children, click, op, onUserClick}) => {
    // let username
    // try {
    //     username = user.name
    // }
    // catch(e) {
    //     username = ""
    // }
    return ( 
        <div className="PostPreview" >
            <PostInfo 
                    title={title}
                    username={user.name}
                    timestamp={timestamp}
                    op={op}
                    click={onUserClick}
                    user={typeof user == "object" ? user.id : user} />
            <div onClick={click}>
                <hr />
                <p>{text}</p>
            </div>
            
            <hr />
            {children}
        </div>
     );
}
 
export default PostPreview;