import React, { useState } from 'react';
import { Parallax } from 'react-scroll-parallax';
import styled from 'styled-components';
import useWindowHeight from '@/hooks/useWindowHeight';

import IntroSection from './components/IntroSection';
import TitleElement from './components/TitleElement';
import VideoElement from './components/VideoElement';

const Root = styled.section`
    height: 400vh;
    width: 100%;
`;

const Container = styled(Parallax)`
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const videoPoster = 'https://cdn2.unrealengine.com/ue5-bigger-worlds-placeholder-1920x1080-b8ddb42726e1.png';
const videoSource = 'https://cdn2.unrealengine.com/unreal-engine-5-bigger-worlds-intro-1b3ac82d178e.mp4';

const Hero = () => {
  const { windowHeight } = useWindowHeight();
  const [hasScrolled, setHasScrolled] = useState(false);

  const [progress, setProgress] = useState(0);
  const onProgressChange = (y: number) => setProgress(y);

  const containerStyles = () => {
    if (progress < 1) return ({ position: 'fixed' as 'fixed', top: '0' });
    return ({ position: 'absolute' as 'absolute', top: '300vh' });
  };

  return (
    <Root>
      <Container
        startScroll={windowHeight}
        endScroll={windowHeight * 3}
        onProgressChange={onProgressChange}
        style={containerStyles()}
      >
        <IntroSection
          hasScrolled={hasScrolled}
          setHasScrolled={setHasScrolled}
        />
        <VideoElement
          poster={videoPoster}
          src={videoSource}
          hasScrolled={hasScrolled}
        />
        <TitleElement />
      </Container>

    </Root>
  );
};

export default Hero;
