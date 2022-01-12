import React from 'react';
import styled from 'styled-components';
import { skillsData } from '../../utlis/data';

const Info = () => {
  return (
    <Wrapper id='skills-info'>
      {skillsData.map((item) => {
        const { id, logo, title, text } = item;
        return (
          <li key={id}>
            <div className='logo-container'>
              <img src={logo} alt='' />
            </div>
            <div className='info-container'>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
            {id < skillsData.length && <div className='list-line'></div>}
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  li {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    position: relative;
  }

  .logo-container {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: var(--secondary-color);
    display: grid;
    place-items: center;
  }

  .info-container {
    max-width: 190px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 16px;
  }

  .list-line {
    position: absolute;
    left: 28px;
    top: 0;
    right: auto;
    width: 1px;
    border-left: 1px dashed rgba(30, 30, 47, 0.6);
    margin-top: 71px;
    height: 48px;
  }

  @media (min-width: 768px) {
    flex: 1;
  }

  @media (min-width: 998px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;
export default Info;
