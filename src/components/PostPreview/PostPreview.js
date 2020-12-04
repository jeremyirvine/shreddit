import React from 'react';
import PostInfo from '../PostInfo/PostInfo';

import './PostPreview.css'


const PostPreview = ({title, user, timestamp, text, children, click, op}) => {
    // let username
    // try {
    //     username = user.name
    // }
    // catch(e) {
    //     username = ""
    // }
    return ( 
        <div className="PostPreview" >
            <div onClick={click}>
                <PostInfo 
                    title={title}
                    username={user.name}
                    timestamp={timestamp}
                    op={op} />
                <hr />
                <p>{text}</p>
            </div>
            
            <hr />
            {children}
        </div>
     );
}
 
export default PostPreview;