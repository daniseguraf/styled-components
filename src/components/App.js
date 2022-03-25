import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './../pages/Home';
import Login from './../pages/Login';
import lightTheme from './../themes/light';
import darkTheme from './../themes/dark';

const GlobalStyle = createGlobalStyle`
body {
  background: ${({ theme }) => theme.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color: ${({ theme }) => theme.bodyFontColor};
  font-family: 'Kaushan Script';
}
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((currentValue) =>
            currentValue.id === 'light' ? darkTheme : lightTheme
          );
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} exact />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
