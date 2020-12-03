import React from 'react';
import './LikeCounter.css'

const LikeCounter = ({children, upvoteAmt}) => {

    // children = Total upvotes for that post
    // upvoteAmt = Upvote amount for current user (determine coloring)

    let classes = ["LikeCounter"]
    upvoteAmt > 0 && classes.push("up")
    upvoteAmt < 0 && classes.push("down")
    return ( 
        <b className={classes.join(" ")}>{children}</b>
     );
}
 
export default LikeCounter;