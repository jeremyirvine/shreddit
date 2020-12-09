import { useState } from 'react';
import './App.css';

import postsData from './data/posts'
import userData from './data/users'

import NavBar from './components/NavBar/NavBar';
import PostsView from './views/PostsView/PostsView';
import FullPostView from './views/FullPostView/FullPostView';
import UserView from './views/UserView/UserView';

function App() {

  const [posts, setPosts] = useState(postsData.reverse())
  const [users, setUsers] = useState(userData)
  const [state, setState] = useState({ 
    isViewingPost: false,
    viewingPost: {},
    isViewingUser: false,
    viewingUser: {},
    currentUser: (users.find(u => u.id === "45rg893hr")),
    currentUserId: "45rg893hr"
  })

  const changePost = (post, name, value) => {
    let index = posts.indexOf(post)
    setPosts([
      ...posts.slice(0, index),
      {
        ...post,
        [name]: value
      },
      ...posts.slice(index + 1)
    ])
  }

  const getPostById = id => {
    return posts.find(post => post.id === id)
  }

  const handleUpvote = post => {
    let userCopy = {...state.currentUser}
      
    if(!userCopy.likes.find(like => like.postID == post.postID)) {
      changePost(post, "likes", +post.likes + 1)
      userCopy.likes.push({
        postID: post.postID,
        value: 1
      })

      // setState({
      //   ...state,
      //   currentUser: userCopy
      // })
    } else {
      
      if(userCopy.likes.find(like => like.postID == post.postID).value < 0)
      {
        changePost(post, "likes", +post.likes + 2)
        userCopy.likes.find(like => like.postID == post.postID).value = 1
        
      } else {
        
        changePost(post, "likes", +post.likes - 1)
        let i = userCopy.likes.findIndex(like => like.postID == post.postID)
        userCopy.likes.splice(i, 1)
      }
    }
  }

  const handleDownvote = post => {
    let userCopy = {...state.currentUser}
      
    if(!state.currentUser.likes.find(like => like.postID == post.postID)) {
      changePost(post, "likes", +post.likes - 1)
      userCopy.likes.push({
        postID: post.postID,
        value: -1
      })

      setState({
        ...state,
        currentUser: userCopy
      })
    } else {
      if(userCopy.likes.find(like => like.postID == post.postID).value > 0)
      {
        
        changePost(post, "likes", +post.likes - 2)
        userCopy.likes.find(like => like.postID == post.postID).value = -1
      }
      else {
        changePost(post, "likes", +post.likes + 1)
        let i = userCopy.likes.findIndex(like => like.postID == post.postID)
        userCopy.likes.splice(i, 1)
      }
    }
  }

  const handleViewPost = post => {
    setState({
      ...state,
      viewingPost: post.postID,
      isViewingPost: true
    })
  }

  const exitViewPost = () => {
    setState({
      ...state,
      viewingPost: {},
      isViewingPost: false,
      isViewingUser: false,
      viewingUser: {}
    })
  }

  const handleViewUser = user => {
    setState({
      ...state,
      isViewingUser: true,
      viewingUser: user
    })
  }

  const handleCreatePost = post => {
    let newPost = {
      postID: ((Math.random()* 100090).toString(16)).replace(".", ""),
      title: post.title,
      text: post.content,
      timePosted: new Date().toString(),
      likes: 0,
      authorID: state.currentUserId,
      comments: []
    }

    setPosts([
      newPost,
      ...posts,
    ])
  }

  let content = !state.isViewingPost ? (
    <PostsView 
      posts={posts} 
      users={users}
      onUpvote={handleUpvote}
      onDownvote={handleDownvote}
      onViewPost={handleViewPost}
      currentUser={state.currentUser.id} 
      onUserClick={handleViewUser} 
      onPost={handleCreatePost}
      showCreatePost />
  ) : (
    <FullPostView 
      post={posts.find(post => post.postID === state.viewingPost)} 
      users={users}
      currentUser={state.currentUserId}
      onUpvote={handleUpvote}
      onDownvote={handleDownvote}
      onUserClick={handleViewUser} />
  )
  return (
    <div className="App">
      <NavBar
        onLogoClick={exitViewPost}
        user={state.currentUser}
        onUserClick={handleViewUser}
         />
         {state.isViewingUser ? (
           <UserView 
            user={users.find(user => user.id == state.viewingUser)}
            currentUser={state.currentUserId}
            op={state.viewingUser == state.currentUserId}
            posts={posts} 
            users={users}
            onUpvote={handleUpvote}
            onDownvote={handleDownvote}
            onViewPost={handleViewPost}
            currentUser={state.currentUserId}
            onUserClick={handleViewUser} />
         ) : content}
    </div>
  );
}

export default App;
