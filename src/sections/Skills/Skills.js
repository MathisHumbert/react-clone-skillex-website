import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';
import Content from './Content';

const Skills = () => {
  const { skills } = useGlobalContext();

  return (
    <Wrapper className="section" ref={skills}>
      <header>
        <h1 onClick={() => console.log(skills)}>
          Get the skills you need for a job that is in demand.
        </h1>
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
    margin-bottom: 68px;
    h1 {
      font-size: 40px;
      margin-bottom: 40px;
    }
    p {
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    header {
      h1 {
        max-width: 440px;
      }
      p {
        max-width: 520px;
        line-height: 2rem;
      }
    }
  }

  @media (min-width: 998px) {
    header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      h1 {
        width: 22vw;
        margin-bottom: 0;
      }

      p {
        margin-right: 4vw;
      }
    }
  }
`;
export default Skills;
