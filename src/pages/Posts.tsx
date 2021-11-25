import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import postsData from '../data/postsData';

const Posts = () => (
  <div className="container">
    <ul>
      {postsData.map((post) => (
        <li style={{ marginBottom: 10 }}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
    <Outlet />
  </div>
);

export default Posts;
