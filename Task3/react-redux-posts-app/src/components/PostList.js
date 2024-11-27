import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../features/posts/postsSlice';

const PostList = () => {
  const state = useSelector((state) => state);
  console.log('Redux state:', state);
  const dispatch = useDispatch();

  // Access the posts state
  const posts = useSelector((state) => state.posts.posts); // Access state.posts and then .posts
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  // Fetch posts on initial render
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);


  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default PostList;