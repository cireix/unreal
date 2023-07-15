import React, { useEffect } from 'react';
import Hero from '@/common/hero/Hero';

const App = () => {
  useEffect(() => {
    // Prevent scroll restoration on refresh
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <>
      <Hero />
      <div style={{ background: 'red', height: '100vh', width: '100%' }}>123</div>
    </>
  );
};

export default App;
