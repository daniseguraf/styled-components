import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from './index';

const Content = styled.div`
  display: flex;
`;

const PasswordInputStyled = styled(Input).attrs(({ showPassword }) => ({
  name: 'password',
  type: showPassword ? 'text' : 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9rem;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  console.log(props);
  console.log(showPassword);

  return (
    <Content>
      <PasswordInputStyled {...props} showPassword={showPassword} />
      <ToggleButton onClick={() => setShowPassword((val) => !val)}>
        {showPassword ? 'Hide' : 'Show'}
      </ToggleButton>
    </Content>
  );
};

export { PasswordInput };
