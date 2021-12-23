import React from 'react';
import styled from 'styled-components';
import CategoriesContent from '../components/CategoriesContent';
import CategoriesHeader from '../components/CategoriesHeader';

const Categories = () => {
  return (
    <Wrapper>
      <CategoriesHeader />
      <CategoriesContent />
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
