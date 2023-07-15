import React, { useEffect } from 'react';
import Home from '@/pages/Home';

const App = () => {
  useEffect(() => {
    // Prevent scroll restoration on refresh
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <Home />
  );
};

export default App;
