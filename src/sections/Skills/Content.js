import React from 'react';
import styled from 'styled-components';
import Video from './Video';
import Info from './Info';

const Content = () => {
  return (
    <Wrapper id='skills-content'>
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

  @media (min-width: 998px) {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-items: center;
    gap: 40px;
    margin-top: 20px;
  }

  @media (min-width: 1220px) {
    margin-top: 40px;
  }
`;
export default Content;
