import './About.css';
import React, { useState, useEffect } from "react";
import { Form, FormControl, Button, Container, ListGroup, Spinner } from "react-bootstrap";

const About = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);

  // جلب البيانات من API عند تحميل الصفحة
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // const response = await fetch("https://jsonplaceholder.typicode.com/users"); // مثال API
        const response = await fetch("http://127.0.0.1:8000/api/users/");
        const result = await response.json();
        setData(result);
        setFilteredData(result);
      } catch (error) {
        console.error("خطأ في جلب البيانات:", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  // تحديث قائمة البحث عند إدخال نص في البحث
  useEffect(() => {
    const filtered = data.filter((item) =>
      item.username.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  return (
    <Container className="mt-4" id='mohassan'>
      <Form className="d-flex mb-2">
        <FormControl
          type="search"
          placeholder="Find a job ..."
          className="me-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button variant="primary">بحث</Button>
      </Form>

      {loading ? (
        <Spinner animation="border" />
      ) : (
        <ListGroup>
          {filteredData.length > 0 ? (
            filteredData.map((user) => (
              <ListGroup.Item key={user.id}> {user.first_name} {user.last_name} + {user.username}  +
              <span className='mo'>https://{user.email}</span>
                +  {user.about}
              <button className='btn btn-primary'>Show</button>
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item>لا يوجد نتائج</ListGroup.Item>
          )}
        </ListGroup>
      )}
    </Container>
  );
};

export default About;

