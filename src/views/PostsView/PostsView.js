import React from 'react';

import './PostsView.css'
import PostPreview from '../../components/Post/PostPreview';

const PostsView = ({users, posts}) => {

    const getUser = id => users.find(user => user.id == id)

    const getPostPreviewString = text => text.length > 90 ? text.slice(0, 90) + "..." : text

    return ( 
        <div className="PostsView row" key={Math.random()}>
            <div className="ml-auto mr-auto" key={Math.random()}>
                {posts.map(post => (
                    <PostPreview 
                        title={post.title}
                        user={getUser(post.authorID)}
                        timestamp={post.timePosted}
                        text={getPostPreviewString(post.text)}/>
                ))}
            </div>
        </div> 
     );
}
 
export default PostsView;