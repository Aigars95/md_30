import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import usersData from '../data/usersData';

const UserInfo = () => {
  const [user, setUser] = useState(usersData[0]);

  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }

    const matchedUser = usersData.find((item) => item.id.toString() === id);

    if (matchedUser) {
      setUser(matchedUser);
      return;
    }
    navigate('../../404');
  }, [id]);

  const {
    name, username, email, phone, website,
  } = user;

  return (
    <div>
      <h1>{`Name: ${name}`}</h1>
      <h2>{`Username: ${username}`}</h2>
      <h2>{`Email: ${email}`}</h2>
      <h2>{`Phone number: ${phone}`}</h2>
      <h2>{`Website: ${website}`}</h2>

    </div>
  );
};
export default UserInfo;
