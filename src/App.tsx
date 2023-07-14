import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '@/styles/global';
import Hero from '@/common/hero/Hero';
import theme from '@/styles/theme';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
      <Hero />
    </div>
  );
};

export default App;
