import React from 'react';
import PostsView from '../PostsView/PostsView';
import './UserView.css'

const UserView = (props) => {
    // ({ users, posts, onUpvote, onDownvote, onViewPost, currentUser })
    console.log(props)
    return ( 
        <div className="UserView row">
            <div className="ml-auto mr-auto">
                <div className="row">
                    <div className="col">
                        <img src={props.user.img} />
                        <h4 className={props.op ? "op" : ""}>u/{props.user.name}</h4>
                        <small>Joined {new Date(props.user.createdOn).toLocaleDateString("en")}</small>
                    </div>
                    <div className="col">

                        {props.op && <button className="btn btn-success">Edit Profile</button>}
                    </div>
                </div>
                
                <hr />
                <div className="posts">
                    <b>Posts</b>

                    <PostsView {...props} onlyUser margin="-87px" onUserClick={props.onUserClick} />
                </div>
            </div>
        </div>
     );
}
 
export default UserView;