import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import usersData from '../data/usersData';

const Users = () => (
  <div className="container">
    {usersData.map((user) => <Link to={`/users/${user.id}`}>{user.name}</Link>)}
    <Outlet />
  </div>
);

export default Users;
