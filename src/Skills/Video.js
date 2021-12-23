import React from 'react';
import styled from 'styled-components';
import img from '../images/1290604435-1a41ad0506cf2496dab491080f83e4dff26dc61eec8bf5f23.jpeg';
import Slider from './Slider';

const Video = () => {
  return (
    <Wrapper>
      <img src={img} alt="main-img" />
      <Slider />
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: 60%;
    border-radius: var(--radius);
  }

  .content {
    position: absolute;
    right: 20px;
    top: 0;
    transform: translateY(-50%);
  }
`;
export default Video;
