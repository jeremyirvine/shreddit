import React from 'react';

import './PostsView.css'
import PostPreview from '../../components/PostPreview/PostPreview';
import PostControls from '../../components/PostControls/PostControls';

const PostsView = ({ users, posts, onUpvote, onDownvote, onViewPost, currentUser, onlyUser, margin, user, onUserClick}) => {

    const getUser = id => users.find(user => user.id == id)

    const getPostPreviewString = text => text.length > 90 ? text.slice(0, 90) + "..." : text

    const getVoted = post => {
       let m = getUser(currentUser).likes.find(p => p.postID === post.postID)

       return m ? {
           hasVoted: m !== undefined,
           amount: m.value
       } : {
           hasVoted: false
       }
    }

    let pArr = [...posts]

    if(onlyUser) {
        console.log(currentUser)
        pArr = pArr.filter(p => p.authorID == user.id)
    }

    let style = {}

    if(margin)
        style = {marginTop: margin}
    
    return (
        <div className="PostsView row" style={style}>
            <div className="ml-auto mr-auto" >
                {pArr.map(post => (
                    <PostPreview
                        title={post.title}
                        user={getUser(post.authorID)}
                        timestamp={post.timePosted}
                        text={getPostPreviewString(post.text)}
                        key={post.postID} 
                        click={() => onViewPost(post)}
                        op={currentUser == post.authorID}
                        onUserClick={onUserClick}>
                        <PostControls
                            onUpvote={() => onUpvote(post)}
                            onDownvote={() => onDownvote(post)}
                            upvotes={post.likes}
                            upvoted={getVoted(post).hasVoted}
                            upvoteAmt={getVoted(post).amount} />
                    </PostPreview>
                ))}
            </div>
        </div>
    );
}

export default PostsView;