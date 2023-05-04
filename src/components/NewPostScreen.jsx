import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { createPost } from '../actions';

export default function NewPostScreen() {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [coverUrl, setCoverUrl] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column w-75 border border-dark rounded bg-light p-4 my-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Your Title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control value={tags} onChange={(e) => setTags(e.target.value)} type="text" placeholder="Your Tags" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <Form.Control value={content} onChange={(e) => setContent(e.target.value)} as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cover Image URL</Form.Label>
            <Form.Control value={coverUrl} onChange={(e) => setCoverUrl(e.target.value)} type="text" placeholder="Your URL" />
          </Form.Group>
          <Button
            onClick={() => {
              if (!title || !tags || !content || !coverUrl) {
                alert('Must fill out all fields!');
              } else {
                dispatch(createPost({
                  title,
                  tags,
                  content,
                  coverUrl,
                }, navigate));
              }
            }}
            variant="primary"
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
