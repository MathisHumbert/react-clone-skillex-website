import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Skills = () => {
  return (
    <Wrapper className="section">
      <header>
        <h1>Get the skills you need for a job that is in demand.</h1>
        <p>
          The modern labor market dictates its own terms. Today, to be a
          competitive specialist requires more than professional skills
        </p>
      </header>
      <Content />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;

  header {
    h1 {
      font-size: 40px;
      margin-bottom: 40px;
    }
    p {
      font-size: 20px;
    }
    margin-bottom: 68px;
  }
`;
export default Skills;
