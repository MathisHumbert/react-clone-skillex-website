import React from 'react';
import styled from 'styled-components';
import Video from './Video';
import Info from './Info';

const Content = () => {
  return (
    <Wrapper>
      <Video />
      <Info />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
  }
`;
export default Content;
