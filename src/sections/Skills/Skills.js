import { useEffect } from 'react';
import styled from 'styled-components';
import Content from './Content';
import {
  slideInTop,
  slideInTopDelay,
  slideInTopHeader,
} from '../../utlis/gsapActions';

const Skills = () => {
  useEffect(() => {
    slideInTop('#skills');
    slideInTopDelay('#skills-video', '#skills');
    slideInTopHeader('#skills-info li');
  }, []);

  return (
    <Wrapper className='section' id='skills'>
      <header>
        <h1>
          Get the skills you need for a job that is in demand
          <span className='green-block'></span>
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
