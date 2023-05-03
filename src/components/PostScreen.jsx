import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { Form, Button, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { fetchPost, updatePost, deletePost } from '../actions';

export default function PostScreen() {
  const { postID } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.current);

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(fetchPost(postID));
  }, []);

  useEffect(() => {
    setTitle(post.title);
    setTags(post.tags);
    setContent(post.content);
  }, [post]);

  return (
    <div className="border border-primary d-flex justify-content-center">
      <div className="d-flex flex-column w-75 bg-light p-2 my-5">
        <Image fluid className="w-50 align-self-center" src={post.coverUrl} />
        <div className="d-flex justify-content-end my-2">
          <Button className="me-4" onClick={() => { setIsEditing(!isEditing); }} variant={isEditing ? 'outline-primary' : 'primary'}>
            <FontAwesomeIcon
              style={{
                fontSize: 18,
              }}
              icon={faPenToSquare}
            />
          </Button>
          <Button className="" onClick={() => { dispatch(deletePost(postID, navigate)); }} variant="outline-danger">
            <FontAwesomeIcon
              style={{
                fontSize: 18,
              }}
              icon={faTrashCan}
            />
          </Button>
        </div>
        <Form className="">
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control disabled={!isEditing} value={title || ''} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tags</Form.Label>
            <Form.Control disabled={!isEditing} value={tags || ''} onChange={(e) => setTags(e.target.value)} type="text" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            {isEditing ? (
              <Form.Control disabled={!isEditing} value={content || ''} onChange={(e) => setContent(e.target.value)} as="textarea" placeholder="Enter title" rows={3} />
            ) : (
              <ReactMarkdown>
                {content}
              </ReactMarkdown>
            )}
          </Form.Group>

          {isEditing && (
          <Button
            onClick={() => {
              if (!title || !tags || !content) {
                alert('Must fill out all fields!');
              } else {
                dispatch(updatePost(postID, {
                  title,
                  tags,
                  content,
                }));
                setIsEditing(false);
              }
            }}
            variant="primary"
          >
            Submit
          </Button>
          )}
        </Form>
      </div>
    </div>
  );
}
