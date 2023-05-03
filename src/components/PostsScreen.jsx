import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Post from './Post';
import { fetchPosts } from '../actions';

export default function PostsScreen() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.all);

  useEffect(() => {
    console.log('posts screen mounted');
    dispatch(fetchPosts());
    return () => { console.log('posts screen unmounted'); };
  }, []);

  return (
    <div className="border border-primary flex-wrap d-flex justify-content-around align-items-start">
      {posts?.map((el) => <Post key={el.id} id={el.id} title={el.title} tags={el.tags} coverUrl={el.coverUrl} />)}
    </div>
  );
}
