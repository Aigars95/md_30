import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import postsData from '../data/postsData';
import usersData from '../data/usersData';

const Post = () => {
  const [post, setPost] = useState(postsData[0]);

  const { id } = useParams<'id'>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }

    const matchedPost = postsData.find((item) => item.id.toString() === id);

    if (matchedPost) {
      setPost(matchedPost);
      return;
    }
    navigate('../../404');
  }, [id]);

  const { userId, title, body } = post;
  return (
    <div className="container">
      <div>
        <h2>{title}</h2>
        <p style={{ whiteSpace: 'pre-line' }}>{body}</p>
      </div>
    </div>
  );
};

export default Post;
