import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

const Home = () => {
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
      <div className="container">
      <Card className="mt-5">
        <Card.Body>
          <Card.Title>Welcome to my test website!</Card.Title>
            <Card.Text>
                Subscribe to our newsletter to get the latest updates!
            </Card.Text>
        </Card.Body>
      </Card>
      <Form className="mt-5" onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Newsletter</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
      <Form.Text className="text-muted">
      Subscribe to our newsletter to get the latest updates!
      </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
      {showSuccess && <Alert variant="success" className="mt-3">Email submitted successfully to {email}!</Alert>}
    </div>
  );
};

export default Home;
