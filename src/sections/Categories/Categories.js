import React from 'react';
import styled from 'styled-components';
import Content from './Content';
import Header from './Header';

const Categories = () => {
  return (
    <Wrapper
      className="section"
      data-scroll-section
      data-scroll
      id="categories"
    >
      <Header />
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .animation-block {
    opacity: 0;
    transform: translateY(100px);
  }

  &.is-reveal {
    .animation-block {
      opacity: 1;
      transform: translateY(0);
      transition: all 0.8s var(--transition);
      transition-delay: 0.3s;
    }
  }
`;
export default Categories;
