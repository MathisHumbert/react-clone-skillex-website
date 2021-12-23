import React from 'react';
import styled from 'styled-components';
import CategoriesContent from '../components/CategoriesContent';
import CategoriesImages from '../components/CategoriesImages';

const Categories = () => {
  return (
    <Wrapper>
      <CategoriesImages />
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
