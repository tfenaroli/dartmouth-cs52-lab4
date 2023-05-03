import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import Post from './Post';
import { fetchPosts } from '../actions';

export default function PostsScreen() {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.all);

  useEffect(() => {
    console.log('posts screen mounted');
    dispatch(fetchPosts());
    return () => { console.log('posts screen unmounted'); };
  }, []);

  return (
    <>
      <Form className="w-50 mx-auto rounded bg-light p-3 mt-4 border border-dark">
        <Form.Group className="">
          <Form.Label>Search</Form.Label>
          <Form.Control value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); }} type="text" placeholder="Enter query" />
          <Form.Text className="text-muted">
            Search by tags!
          </Form.Text>
        </Form.Group>
      </Form>
      <div className="flex-wrap d-flex justify-content-around align-items-start">
        {posts?.filter((el) => el.tags.toLowerCase().includes(searchTerm.toLowerCase())).map((el) => <Post key={el.id} id={el.id} title={el.title} tags={el.tags} coverUrl={el.coverUrl} />)}
      </div>
    </>
  );
}
