import React from 'react';
import PostControls from '../../components/PostControls/PostControls';
import PostInfo from '../../components/PostInfo/PostInfo';
import './FullPostView.css'

const FullPostView = ({currentUser, post, users, onDownvote, onUpvote, onUserClick}) => {
    
    const getUser = id => users.find(user => user.id == id)

    const getVoted = post => {
        let m = getUser(post.authorID).likes.find(p => p.postID === post.postID)
 
        return m ? {
            hasVoted: m !== undefined,
            amount: m.value
        } : {
            hasVoted: false
        }
     }

    
    return ( 
        <div className="row">
            <div className="ml-auto mr-auto">
                <div className="FullPostView">
                    <PostInfo 
                        title={post.title}
                        timestamp={post.timePosted}
                        username={getUser(post.authorID).name}
                        click={onUserClick}
                        user={post.authorID}
                        op={currentUser == post.authorID}/>
                    <hr />
                    <p>
                        {post.text}
                    </p>
                    <hr />
                    <PostControls
                            onUpvote={() => onUpvote(post)}
                            onDownvote={() => onDownvote(post)}
                            upvotes={post.likes}
                            upvoted={getVoted(post).hasVoted}
                            upvoteAmt={getVoted(post).amount} />
                </div>
            </div>
        </div>
     );
}
 
export default FullPostView;