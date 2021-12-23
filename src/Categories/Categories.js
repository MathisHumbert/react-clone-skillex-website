import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Header from './Header';

const Categories = () => {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 36px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;
export default Categories;
