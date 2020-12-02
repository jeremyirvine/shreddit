import { useState } from 'react';
import './App.css';

import postsData from './data/posts'
import userData from './data/users'

import NavBar from './components/NavBar/NavBar';
import PostsView from './views/PostsView/PostsView';

function App() {

  const [posts, setPosts] = useState(postsData)
  const [users, setUsers] = useState(userData)
  const [state, setState] = useState({ 
    isViewingPost: false,
    viewingPost: {},
    isViewingUser: false,
    viewingUser: {}
  })

  return (
    <div className="App">
      <NavBar />
      <PostsView 
        posts={posts} 
        users={users} />
    </div>
  );
}

export default App;
