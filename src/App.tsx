import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Users from './pages/Users';
import UserInfo from './pages/UserInfo';
import Posts from './pages/Posts';
import './App.scss';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

const App = () => (
  <div className="App">
    <header>
      <nav>
        <Link to="/users">Users</Link>
        <Link to="/posts">Posts</Link>
      </nav>
    </header>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserInfo />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
