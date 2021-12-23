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

const Wrapper = styled.div``;
export default Content;
