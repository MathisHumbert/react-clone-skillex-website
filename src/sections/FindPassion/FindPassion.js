import React from 'react';
import styled from 'styled-components';
import Image from './Image';
import { findPassionData } from '../../utlis/data';

const FindPassion = () => {
  return (
    <Wrapper className="section">
      <article className="left">
        <h1>Watch.</h1>
        <h1>Learn.</h1>
        <h1>Grow.</h1>
      </article>
      <article className="right">
        {findPassionData.map((item) => {
          return <Image key={item.id} {...item} />;
        })}
      </article>
      <form className="contact">
        <input
          type="text"
          placeholder="Find your passion"
          className="contact-input"
        />
        <button type="submit">Go</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  display: grid;
  gap: 60px;
  padding-bottom: 182px;
  position: relative;

  h1 {
    font-size: 76px;
    line-height: 76px;
  }

  .right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }

  form {
    position: absolute;
    bottom: 36px;
    height: 86px;
    max-width: 340px;
  }

  input {
    padding: 8px 12px 8px 32px;
  }

  button {
    width: 86px;
    height: 86px;

    &:hover {
      box-shadow: inset 0 0 0 0 var(--green-color);
    }
  }
`;
export default FindPassion;
