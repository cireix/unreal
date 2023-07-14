import React from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSVG } from '@/assets/images/global/logo.svg';
import BackgroundImg from '@/assets/images/hero/background.png';

const Root = styled.section`
    height: 400vh;
`;

const Background = styled.img`
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: auto;
    transform: translateX(-50%);
`;

const Intro = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: red;
    // background-position: center center;
    // background-repeat: no-repeat;
    // background-image: url(${BackgroundImg});
`;

const Hero = () => {
  return (
    <Root>
      {/* <LogoSVG /> */}
      <Intro>
        <Background src={BackgroundImg} />
      </Intro>

    </Root>
  );
};

export default Hero;
