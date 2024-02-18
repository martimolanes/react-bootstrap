import { Accordion, Card, Button } from 'react-bootstrap';

const Blogs = () => {
  const blogs = [
    { id: 1, title: "React vs Vite", summary: "test summary"},
    { id: 2, title: "Svelte vs React", summary: "test summary2" },
  ];

  return (
    <Accordion defaultActiveKey="0" className="mt-3">
      {blogs.map((blog, index) => (
        <Card key={blog.id}>
          <Accordion.Item eventKey={`${index}`}>
            <Accordion.Header>{blog.title}</Accordion.Header>
            <Accordion.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.summary}</Card.Text>
              <Button variant="primary">Expand Article</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Card>
      ))}
    </Accordion>
  );
}

export default Blogs;
