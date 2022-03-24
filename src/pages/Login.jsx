import React, { useState } from 'react';
import styled from 'styled-components';
import PageLayout from '../components/PageLayout';
import Input from '../components/Input';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background-color: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({ username: '', password: '' });
  console.log(formFields);
  const handleChange = (e) => {
    e.persist();
    setFormFields((currentValue) => ({
      ...currentValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          type="text"
          value={formFields.username}
          name="username"
          placeholder="Username"
          onChange={handleChange}
        />
        <Input
          type="password"
          value={formFields.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form>
    </PageLayout>
  );
};

export default Login;
