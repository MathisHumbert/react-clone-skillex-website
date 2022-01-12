import { useEffect } from 'react';
import styled from 'styled-components';
import { slideInTop, slideInTopDelay } from '../../utlis/gsapActions';
import Content from './Content';
import Header from './Header';

const Categories = () => {
  useEffect(() => {
    slideInTop('#categories');
    slideInTopDelay('#categories-content', '#categories');
  }, []);

  return (
    <Wrapper className='section' id='categories'>
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
`;
export default Categories;
