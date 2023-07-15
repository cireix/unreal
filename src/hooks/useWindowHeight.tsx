import { useState, useEffect } from 'react';
import { useParallaxController } from 'react-scroll-parallax';

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const parallaxController = useParallaxController();

  const onResize = () => {
    setWindowHeight(window.innerHeight);
    parallaxController.update();
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return (() => {
      window.removeEventListener('resize', onResize);
    });
  }, []);

  return {
    windowHeight,
  };
};

export default useWindowHeight;
