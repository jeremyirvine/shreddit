import React from 'react';
import UpvoteButton from '../UpvoteButton/UpvoteButton';
import DownvoteButton from '../DownvoteButton/DownvoteButton';

import './PostControls.css'
import LikeCounter from '../LikeCounter/LikeCounter';

const PostControls = ({upvotes, onUpvote, onDownvote, upvoted, upvoteAmt}) => {

    return ( 
        <div className="PostControls">
            <UpvoteButton 
                click={onUpvote}
                active={upvoted && upvoteAmt > 0}/>
                {/* <p>{upvotes}</p> */}
                <LikeCounter upvoteAmt={upvoteAmt}>{upvotes}</LikeCounter>
            <DownvoteButton 
                click={onDownvote}
                active={upvoted && upvoteAmt < 0}/>
        </div>
     );
}
 
export default PostControls;