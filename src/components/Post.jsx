import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Post({
  id, title, tags, coverUrl,
}) {
  return (
    <Card className="border border-dark mt-4 mx-4" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={coverUrl} />
      <Card.Body className="">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{tags}</Card.Text>
      </Card.Body>
      {/* <ListGroup className="list-group-flush">
        {tags.map((el) => <ListGroup.Item>{el}</ListGroup.Item>)}
      </ListGroup> */}
      <Card.Body className="text-center border-top border-dark">
        <Button as={Link} to={`posts/${id}`} variant="outline-primary">See Post</Button>
      </Card.Body>
    </Card>
  );
}
