import { Card, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="d-flex flex-wrap justify-content-around">
      <Card style={{ width: '18rem' }} className="m-2">
        <Card.Body>
          <Card.Title>Contact Me</Card.Title>
          <Card.Text>
            Please feel free to reach out to me for any inquiries or feedback.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className="m-2">
        <Card.Body>
          <Card.Title>General Inquiry</Card.Title>
          <Card.Text>
            Have general questions? Click the button below to email us.
          </Card.Text>
          <Button variant="primary" href="mailto:general@example.com">Email Us</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className="m-2">
        <Card.Body>
          <Card.Title>Feedback</Card.Title>
          <Card.Text>
            Have some feedback? We'd love to hear from you. Click the button below to send us your feedback.
          </Card.Text>
          <Button variant="primary" href="mailto:feedback@example.com">Send Feedback</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }} className="m-2">
        <Card.Body>
          <Card.Title>Support</Card.Title>
          <Card.Text>
            Need support? Click the button below to email our support team.
          </Card.Text>
          <Button variant="primary" href="mailto:support@example.com">Email Support</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Contact;
