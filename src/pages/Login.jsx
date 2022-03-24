import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from '../components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    padding: 10px 0;
    text-align: center;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.persist();
    setFormFields((currentValue) => ({
      ...currentValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              type="text"
              value={formFields.username}
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <PasswordInput
              value={formFields.password}
              onChange={handleChange}
            />
          </>
        )}

        <Button size="large" type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>

        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button variant="secondary" size="large" type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

export default Login;
